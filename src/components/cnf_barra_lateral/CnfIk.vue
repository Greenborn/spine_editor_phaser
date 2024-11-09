<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseIk" aria-expanded="false" aria-controls="collapseIk">
                    ik
                </button>
            </h2>
            <div id="collapseIk" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="col">
                        <div class="row border" v-for="ikk in props.json_?.spineboy?.ik" :key="ikk">
                            <small>{{ ikk }}</small>
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