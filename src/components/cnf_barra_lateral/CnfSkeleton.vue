<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseSkeleton" aria-expanded="false" aria-controls="collapseSkeleton">
                    skeleton
                </button>
            </h2>
            <div id="collapseSkeleton" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col">
                            {{ props.json_?.spineboy?.skeleton }}
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