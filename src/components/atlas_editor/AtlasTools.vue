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
    sprites_conf: [],
    atlas_img_src: ''
})
const superficie_min = ref(0)
const ancho_max = ref(0)
const alto_max = ref(0)

function conf_gral_upd(gral_) {
    model_atlas.value.gral = gral_
}

function atlas_model_upd(_model){
    model_atlas.value = _model
    atlas_txt_cmp.value.atlas_model_upd(_model)
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
                    if (width > ancho_max.value) ancho_max.value = width
                    if (height > alto_max.value) alto_max.value = height

                    model_atlas.value.sprites_conf.push({
                        name: "sprite_"+model_atlas.value.sprites_conf.length, ancho: width, alto: height, x: 0, y: 0,
                        img_data: imgs[i], superficie: width * height
                    })

                    superficie_min.value += (width * height)
                }

                generar_img_atlas()
                
                atlas_txt_cmp.value.atlas_model_upd(model_atlas.value)
                emit('sprites_upd', model_atlas.value)
            }
        })
}

function generar_img_atlas() {
    const sprites_     = [...model_atlas.value.sprites_conf]
    const cant_sprites = Number(sprites_.length)
    const raiz         = Math.ceil(Math.sqrt(cant_sprites))
    console.log( model_atlas.value, superficie_min.value, ancho_max.value, alto_max.value, cant_sprites, raiz)

    const canvas = document.createElement('canvas')
    canvas.width  = ancho_max.value * raiz
    canvas.height = alto_max.value * raiz
    const ctx = canvas.getContext('2d')
    
    let matriz = []
    for (let i = 0; i < raiz; i++) {
        if (!matriz[i]) matriz[i] = []
        for (let j = 0; j < raiz; j++) {
            const SPRITE_ = sprites_.pop()
            const POS_ARR = sprites_.length
            if (!SPRITE_) break

            matriz[i].push(SPRITE_)
            const px = i*ancho_max.value
            const py = j*alto_max.value
console.log(POS_ARR)
            model_atlas.value.sprites_conf[POS_ARR].x = px
            model_atlas.value.sprites_conf[POS_ARR].y = py

            const IMG_ = new Image()
            IMG_.src = SPRITE_.img_data.base64

            //console.log(px, py, SPRITE_.ancho, SPRITE_.alto)
            IMG_.onload = () => {
                ctx.drawImage(IMG_, px, py, SPRITE_.ancho, SPRITE_.alto)
            }
            
        }
    }

    setTimeout(() => {
        canvas.toBlob((blob) => {
            model_atlas.value.atlas_img_src = URL.createObjectURL(blob)
        })
    }, 1000)
    
}

function mostrar_ayuda() {
    storeApp.mostrar_modal(AtlasHelp, 'Ayuda', {})
}

</script>
