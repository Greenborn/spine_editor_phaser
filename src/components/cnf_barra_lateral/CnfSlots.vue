<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseSlots" aria-expanded="false" aria-controls="collapseSlots">
                    slots
                </button>
            </h2>
            <div id="collapseSlots" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col">
                            <div class="row border" v-for="slot in json_?.spineboy?.slots" :key="slot">
                                <small>"{{ slot }}"</small>
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