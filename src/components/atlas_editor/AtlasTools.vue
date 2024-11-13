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
            <AtlasCfgGral :gral = "model_atlas.gral" />
            <AtlasCfgSprites :sprites = "model_atlas.sprites_conf" @sprites_upd="sprites_updated" />
            <AtlasTxtEditor @sprites_upd="sprites_updated" />
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

const emit = defineEmits(['sprites_upd'])

const model_atlas = ref({
    gral: {
        img_name: 'atlas.png', ancho: 0, alto: 0, filter: 'filter:Linear,Linear', pma: 'pma:true'
    }, 
    sprites_conf: []
})

function sprites_updated(sprites_) {
    model_atlas.value.sprites_conf = []

    let keys_ = Object.keys(sprites_)
    for (let i = 0; i < keys_.length; i++) {
        const sprite_ = sprites_[keys_[i]] 
        model_atlas.value.sprites_conf.push({
            nombre: sprite_.name, ancho: sprite_.bounds.w, alto: sprite_.bounds.h, x: sprite_.bounds.x, y: sprite_.bounds.y
        })
    }
    emit('sprites_upd', sprites_)
}

function subir_imagen() {
    storeApp.mostrar_modal(FormUploadImgAtlas, 'Cargar Imagen Atlas',
        {
            agregar_img: async ( imgs ) => {
                console.log(imgs)
                storeApp.ocultar_modal()
            }
        })
}

function mostrar_ayuda() {
    storeApp.mostrar_modal(AtlasHelp, 'Ayuda', {})
}

</script>
