<template>
    <div class="row">
        <div class="col p-0">

            <Splitter>
                <SplitterPanel class="flex items-center justify-center">
                    <div class="cont-img">
                        <div class="zona_sprites">
                            <div class="sprite_data" v-for="sprite in sprites" :style="{
                                top: sprite.bounds.y + 'px',
                                left: sprite.bounds.x + 'px',
                                width: sprite.bounds.w + 'px',
                                height: sprite.bounds.h + 'px',
                                transform: 'rotate(' + sprite?.rotate + 'deg)',
                                'transform-origin': 'center'
                            }">
                                <span class="extra_data">{{ sprite.name }}</span>
                            </div>
                        </div>
                        <img class="border" src="http://localhost:5000/assets/atlas1.png" />
                    </div>
                </SplitterPanel>

                <SplitterPanel class="splitter-100vh flex items-center justify-center">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <ImagenesInput v-model="model.imagen" :config="config_img" />
                                cargar .atlas
                            </div>
                        </div>
                        <AtlasTxtEditor @sprites_upd="sprites_updated" />
                    </div>
                </SplitterPanel>

            </Splitter>


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

function sprites_updated(sprites_) {
    sprites.value = sprites_
}
</script>

<style scoped>
.cont-img {
    width: 100%;
    height: 99vh;
    overflow: scroll;
    background: #c2c2c2;
    position: relative;
}

.zona_sprites {
    position: relative;
}

.sprite_data {
    position: absolute;
    border: 1px solid red;
    text-overflow: clip;
    background: rgba(0, 0, 0, 0.2);
}

.splitter-100vh{
    height: 99vh;
}
</style>