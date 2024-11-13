<template>
    <div class="col">
        <div class="row justify-content-center">
            <div class="col-auto p-2">
                <Button label="Ayuda" @click="mostrar_ayuda" severity="info" icon="pi pi-question-circle" class="m-1"
                    raised />
                <Button label="Subir Sprites" @click="subir_imagen" severity="contrast" icon="pi pi-images" class="m-1"
                    raised />
                <Button label="Subir Atlas" @click="subir_imagen" severity="contrast" icon="pi pi-image" class="m-1"
                    raised />
                <Button label="Descargar Atlas" @click="subir_imagen" severity="success" icon="pi pi-download"
                    class="m-1" raised />
            </div>
        </div>

        <div class="accordion" id="accordionExample">
            <AtlasCfgGral    :gral = "model_atlas.gral" @conf_gral_upd="conf_gral_upd"/>
            <AtlasCfgSprites :sprites = "model_atlas.sprites_conf"  />
            <AtlasTxtEditor  ref="atlas_txt_cmp" />
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'

import { AppStore } from "../../stores/app"
import AtlasTxtEditor from './AtlasTxtEditor.vue';

import FormUploadImgAtlas from './formUploadImgAtlas.vue';
import AtlasHelp from './AtlasHelp.vue';
import AtlasCfgSprites from './AtlasCfgSprites.vue';
import AtlasCfgGral from './AtlasCfgGral.vue';

const storeApp = AppStore()

defineExpose({ atlas_model_upd })
const emit = defineEmits(['sprites_upd'])

const atlas_txt_cmp = ref()
const model_atlas = ref({
    gral: {
        img_name: 'atlas.png', ancho: 0, alto: 0, filter: 'filter:Linear,Linear', pma: 'pma:true'
    }, 
    sprites_conf: []
})

function conf_gral_upd(gral_) {
    model_atlas.value.gral = gral_
}

function atlas_model_upd(_model){
    model_atlas.value = _model
    atlas_txt_cmp.value.atlas_model_upd(_model)
}

function sprites_updated(sprites_) {
    model_atlas.value.sprites_conf = []

    let keys_ = Object.keys(sprites_)
    for (let i = 0; i < keys_.length; i++) {
        const sprite_ = sprites_[keys_[i]] 
        model_atlas.value.sprites_conf.push({
            name: sprite_.name, ancho: sprite_.bounds.w, alto: sprite_.bounds.h, x: sprite_.bounds.x, y: sprite_.bounds.y
        })
    }
    emit('sprites_upd', sprites_)
}

function subir_imagen() {
    storeApp.mostrar_modal(FormUploadImgAtlas, 'Cargar Imagen Atlas',
        {
            agregar_img: async ( imgs ) => {
                storeApp.ocultar_modal()

                for (let i = 0; i < imgs.length; i++) {

                    const split_ = imgs[i].base64.split(',');
                    const bytes = atob(split_[1]);

                    const arrayBuffer = new ArrayBuffer(bytes.length);
                    const uint8Array = new Uint8Array(arrayBuffer);
                    for (let i = 0; i < bytes.length; i++) {
                        uint8Array[i] = bytes.charCodeAt(i);
                    }

                    const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
                    const url = URL.createObjectURL(blob);

                    const image = await new Promise(resolve => {
                        const img = new Image();
                        img.onload = () => {
                            resolve(img);
                        };
                        img.src = url;
                    })

                    const { width, height } = image

                    model_atlas.value.sprites_conf.push({
                        name: "sprite_"+model_atlas.value.sprites_conf.length, ancho: width, alto: height, x: 0, y: 0,
                        img_data: imgs[i]
                    })
                }

                console.log( model_atlas.value)
                atlas_txt_cmp.value.atlas_model_upd(model_atlas.value)
                emit('sprites_upd', model_atlas.value)
            }
        })
}

function mostrar_ayuda() {
    storeApp.mostrar_modal(AtlasHelp, 'Ayuda', {})
}

</script>
