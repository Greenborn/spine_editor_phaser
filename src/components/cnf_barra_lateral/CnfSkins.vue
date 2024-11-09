<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseSkins" aria-expanded="false" aria-controls="collapseSkins">
                    skins
                </button>
            </h2>
            <div id="collapseSkins" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col">
                            <div class="row border" v-for="skin in props.json_?.spineboy?.skins" :key="skin">
                                <small><b>name:</b> {{ skin?.name }}</small>

                                <div class="row border" v-for="(skin_i, i) in skin?.attachments" :key="skin_i">
                                    <div class="col-1"></div>
                                    <div class="col-11 border">
                                        <small><b>{{ i }}:</b></small>
                                        <div class="row border" v-for="(skin_i_j, j) in skin_i" :key="skin_i_j">
                                            <div class="col-1"></div>
                                            <div class="col-11 border">
                                                <small><b>{{ j }}:</b></small>
                                                <div class="row border" v-for="(skin_i_j_k, k) in skin_i_j"
                                                    :key="skin_i_j_k">
                                                    <div class="col-1"></div>
                                                    <div class="col-11 border">
                                                        <small><b>{{ k }}:</b>{{ skin_i_j_k }}</small>
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