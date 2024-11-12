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
        
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseConfGral" aria-expanded="false" aria-controls="collapseConfGral">
                        Configuración General
                    </button>
                </h2>
                <div id="collapseConfGral" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Configuración General Atlas
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseConfSprites" aria-expanded="false" aria-controls="collapseConfSprites">
                        Configuración Sprites
                    </button>
                </h2>
                <div id="collapseConfSprites" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Configuración Sprites
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTextAtlas" aria-expanded="false" aria-controls="collapseTextAtlas">
                        Editor .atlas
                    </button>
                </h2>
                <div id="collapseTextAtlas" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <AtlasTxtEditor @sprites_upd="sprites_updated" />
                    </div>
                </div>
            </div>
        </div>
        
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