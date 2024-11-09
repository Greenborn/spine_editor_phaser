<template>
    <div class="row">
        <div class="col-auto p-0">
            <div class="zona_sprites">
                <div class="sprite_data" v-for="sprite in sprites"  
                    :style="{
                        top: sprite.bounds.y + 'px', 
                        left: sprite.bounds.x + 'px',
                        width: sprite.bounds.w + 'px',
                        height: sprite.bounds.h + 'px',
                        transform: 'rotate(' + sprite?.rotate + 'deg)',
                        'transform-origin': 'center'
                    }" >
                    <span class="extra_data">{{ sprite.name }}</span>
                </div>
            </div>
            <img src="http://localhost:5000/assets/atlas1.png"  />
        </div>

        <div class="col">
            <div class="row">
                <div class="col">
                    <ImagenesInput v-model="model.imagen" :config="config_img" />
                    cargar .atlas
                </div>
            </div>
            <AtlasTxtEditor @sprites_upd="sprites_updated"  />
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'

import AtlasTxtEditor from './AtlasTxtEditor.vue';
import ImagenesInput from './generic/ImagenesInput.vue';

const model = ref({
    imagen: ''
})
const config_img = ref({})
const sprites = ref({})

function sprites_updated(sprites_){
    sprites.value = sprites_
}
</script>

<style scoped>

.zona_sprites{
    position: absolute;
}

.sprite_data{
    position: absolute;
    border: 1px solid red;
    text-overflow: clip;
    background: rgba(0, 0, 0, 0.2);
}
</style>