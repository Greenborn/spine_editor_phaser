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
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseConfGral" aria-expanded="false" aria-controls="collapseConfGral">
                        Configuración General
                    </button>
                </h2>
                <div id="collapseConfGral" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">

                        <form>
                            <div class="row">
                                <div class="col">
                                    <label for="nombreImg" class="form-label">Nombre</label>
                                    <input type="text" id="nombreImg" class="form-control"
                                        placeholder="atlas.png" v-model="model_atlas.gral.img_name">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <label for="anchoImg" class="form-label">Ancho</label>
                                    <input type="number" id="anchoImg" class="form-control"
                                        placeholder="1024" v-model="model_atlas.gral.ancho">
                                </div>

                                <div class="col-6">
                                    <label for="altoImg" class="form-label">Alto</label>
                                    <input type="number" id="altoImg" class="form-control"
                                        placeholder="1024" v-model="model_atlas.gral.alto">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <label for="filterImg" class="form-label">Filter</label>
                                    <input type="text" id="filterImg" class="form-control"
                                        placeholder="filter:Linear,Linear"  v-model="model_atlas.gral.filter">
                                </div>

                                <div class="col-6">
                                    <label for="pmaImg" class="form-label">Pma</label>
                                    <input type="text" id="pmaImg" class="form-control"
                                        placeholder="pma:true"  v-model="model_atlas.gral.pma">
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

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

        })
}

function mostrar_ayuda() {
    storeApp.mostrar_modal(AtlasHelp, 'Ayuda', {})
}

</script>
