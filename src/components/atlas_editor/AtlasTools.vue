<template>
    <div class="col">
        <div class="row">
            <div class="col">
                <ImagenesInput v-model="model.imagen" :config="{}" />
                cargar .atlas
            </div>
        </div>
        <AtlasTxtEditor @sprites_upd="sprites_updated" />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import AtlasTxtEditor from './AtlasTxtEditor.vue';
import ImagenesInput from '../generic/ImagenesInput.vue';

const emit  = defineEmits(['sprites_upd'])

const model = ref({
    imagen: ''
})

function sprites_updated(sprites_) {
    emit('sprites_upd', sprites_)
}
</script>