<template>
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
</script>