<template>
    
    <div class="row">
        <div class="col">
            <ImagenesInput v-model="model.imagen" 
                :config="{ 
                    preview: true, multiple: true, 
                    img_cont_class: 'col-3 border' }" />
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-auto">
            <Button label="Importar Imagenes" @click="agregar_img" severity="success" icon="pi pi-plus"
                    class="m-1" raised :disabled="model.imagen == ''"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import ImagenesInput from '../../generic/ImagenesInput.vue';

const props = defineProps(['parametros'])


const model = ref({
    imagen: ''
})

async function agregar_img(){
    return await props.parametros.agregar_img(model.value.imagen)
}
</script>