<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseConfSprites" aria-expanded="false" aria-controls="collapseConfSprites">
                Configuración Sprites
            </button>
        </h2>
        <div id="collapseConfSprites" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body cont_conf">

                <Accordion value="0">
                    <AccordionPanel v-for="(sprite, index) in sprites" :key="index" :value="index">
                        <AccordionHeader>{{ sprite.name }}</AccordionHeader>
                        <AccordionContent>
                            <form>
                                <div class="row">
                                    <div class="col-12">
                                        <small><label for="nameSprite" class="form-label">name</label></small>
                                        <input type="text" id="nameSprite" class="form-control"
                                            placeholder="name sprite" v-model="sprite.name">
                                    </div>
                                
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <small><label for="anchoSprite" class="form-label">Ancho</label></small>
                                        <input type="number" id="anchoSprite" class="form-control" placeholder="1024"
                                            v-model="sprite.ancho" disabled>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3">
                                        <small><label for="altoSprite" class="form-label">Alto</label></small>
                                        <input type="number" id="altoSprite" class="form-control" placeholder="1024"
                                            v-model="sprite.alto" disabled>
                                    </div>
                                
                                    <div class="col-12 col-md-6 col-lg-3">
                                        <small><label for="xSprite" class="form-label">x</label></small>
                                        <input type="number" id="xSprite" class="form-control" placeholder="0"
                                            v-model="sprite.x" disabled>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-3">
                                        <small><label for="ySprite" class="form-label">y</label></small>
                                        <input type="number" id="ySprite" class="form-control" placeholder="0"
                                            v-model="sprite.y" disabled>
                                    </div>
                                </div>

                            </form>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>

            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['sprites_upd'])
const props = defineProps(['sprites'])
</script>

<style scoped>
.cont_conf {
    max-height: 41rem;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>