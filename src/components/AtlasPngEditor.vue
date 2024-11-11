<template>
    <div class="row">
        <div class="col p-0">

            <Splitter>
                <SplitterPanel class="flex items-center justify-center">
                    <AtlasImgPrev :sprites="sprites" />
                </SplitterPanel>

                <SplitterPanel class="splitter-100vh flex items-center justify-center">
                    <AtlasTools  @sprites_upd="sprites_updated" />
                </SplitterPanel>

            </Splitter>


        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue'
import AtlasTools from './atlas_editor/AtlasTools.vue';
import AtlasImgPrev from './atlas_editor/AtlasImgPrev.vue';

const sprites = ref({})

function sprites_updated(sprites_) {
    sprites.value = sprites_
}
</script>

<style scoped>

</style>