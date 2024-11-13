<template>
    <div class="row justify-content-end">
        <div class="col-auto">
            <Button label="Agregar" @click="agregar_img" severity="success" icon="pi pi-plus"
                    class="m-1" raised />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <ImagenesInput v-model="model.imagen" 
                :config="{ 
                    preview: true, multiple: true, 
                    img_cont_class: 'col-3 border' }" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import ImagenesInput from '../generic/ImagenesInput.vue';

const props = defineProps(['parametros'])

const model = ref({
    imagen: ''
})

function agregar_img(){
    alert("Funcionalidad en desarrollo.")
}
</script>