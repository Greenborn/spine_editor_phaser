<template>
    <div class="row">
        <div class="col p-0">
            <Splitter>

                <SplitterPanel class="flex items-center justify-center">
                    <Tabs value="0">
                        <TabList>
                            <Tab value="0">Sprites</Tab>
                            <Tab value="1">Imagen Atlas</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel value="0">
                                <AtlasSprites :sprites="sprites" @sprites_upd="sprites_updated"/>
                            </TabPanel>
                            <TabPanel value="1" class="p-0">
                                <AtlasImgPrev :sprites="sprites" />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    
                </SplitterPanel>

                <SplitterPanel class="splitter-100vh flex items-center justify-center">
                    <AtlasTools @sprites_upd="sprites_updated" ref="atlas_tools_cmp" />
                </SplitterPanel>

            </Splitter>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AtlasTools from './atlas_editor/AtlasTools.vue';
import AtlasImgPrev from './atlas_editor/AtlasImgPrev.vue';
import AtlasSprites from './atlas_editor/AtlasSprites.vue';

const sprites = ref({})
const atlas_tools_cmp = ref()
function sprites_updated(sprites_) {
    sprites.value = sprites_
    if (atlas_tools_cmp.value)
        atlas_tools_cmp.value.atlas_model_upd(sprites_)
}
</script>

<style scoped></style>