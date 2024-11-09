<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTransforms" aria-expanded="false" aria-controls="collapseTransforms">
                    transforms
                </button>
            </h2>
            <div id="collapseTransforms" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col">
                            <div class="row border" v-for="trans in props.json_?.spineboy?.transform" :key="trans">
                                <small>{{ trans }}</small>
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