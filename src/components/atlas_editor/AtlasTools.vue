<template>
    <div class="col">
        <div class="row justify-content-center">
            <div class="col-auto p-2">
                <Button label="Ayuda" @click="mostrar_ayuda" severity="info" icon="pi pi-question-circle"  class="m-1" raised />
                <Button label="Subir Sprites" @click="subir_imagen" severity="contrast" icon="pi pi-images"  class="m-1" raised />
                <Button label="Subir Atlas" @click="subir_imagen" severity="contrast" icon="pi pi-image"  class="m-1" raised />
                <Button label="Descargar Atlas" @click="subir_imagen" severity="success" icon="pi pi-download"  class="m-1" raised />
            </div>
        </div>
        
        
        <AtlasTxtEditor @sprites_upd="sprites_updated" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { AppStore } from "../../stores/app"
import AtlasTxtEditor from './AtlasTxtEditor.vue';

import FormUploadImgAtlas from './formUploadImgAtlas.vue';
import AtlasHelp from './AtlasHelp.vue';

const storeApp = AppStore()

const emit  = defineEmits(['sprites_upd'])

function sprites_updated(sprites_) {
    emit('sprites_upd', sprites_)
}

function subir_imagen(){
    storeApp.mostrar_modal(FormUploadImgAtlas, 'Cargar Imagen Atlas',
    {
      
    })
}

function mostrar_ayuda(){
    storeApp.mostrar_modal(AtlasHelp, 'Ayuda', {})
}

</script>