<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseAnim" aria-expanded="false" aria-controls="collapseAnim">
                    animations
                </button>
            </h2>
            <div id="collapseAnim" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col">
                            <div class="row border" v-for="(animation, i ) in props.json_?.spineboy?.animations"
                                :key="animation">
                                <small><b>{{ i }}: </b></small>
                                <div class="row border" v-for="(anima_k, j) in animation" :key="anima_k">
                                    <div class="col-1"></div>
                                    <div class="col-11 border">
                                        <small><b>{{ j }}:</b></small>
                                        <div class="row border" v-for="(anima_k_j, k) in anima_k" :key="anima_k_j">
                                            <div class="col-1"></div>
                                            <div class="col-11 border">
                                                <small><b>{{ k }}:</b></small>
                                                <div class="row border" v-for="(anima_k_j_l, l) in anima_k_j"
                                                    :key="anima_k_j_l">
                                                    <div class="col-1"></div>
                                                    <div class="col-11 border">
                                                        <small><b>{{ l }}:</b>{{ anima_k_j_l }}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['json_'])
</script>