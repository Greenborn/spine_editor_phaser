<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseConfGral" aria-expanded="false" aria-controls="collapseConfGral">
                Configuración General
            </button>
        </h2>
        <div id="collapseConfGral" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">

                <form>
                    <div class="row">
                        <div class="col">
                            <label for="nameImg" class="form-label">name</label>
                            <input type="text" id="nameImg" class="form-control" placeholder="atlas.png"
                                v-model="gral.img_name" @change="conf_change"/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <label for="anchoImg" class="form-label">Ancho</label>
                            <input type="number" id="anchoImg" class="form-control" placeholder="1024"
                                v-model="gral.ancho" disabled/>
                        </div>

                        <div class="col-6">
                            <label for="altoImg" class="form-label">Alto</label>
                            <input type="number" id="altoImg" class="form-control" placeholder="1024"
                                v-model="gral.alto" disabled/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <label for="filterImg" class="form-label">Filter</label>
                            <input type="text" id="filterImg" class="form-control" placeholder="filter:Linear,Linear"
                                v-model="gral.filter" @change="conf_change"/>
                        </div>

                        <div class="col-6">
                            <label for="pmaImg" class="form-label">Pma</label>
                            <input type="text" id="pmaImg" class="form-control" placeholder="pma:true"
                                v-model="gral.pma" @change="conf_change"/>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['gral'])
const emit = defineEmits(['conf_gral_upd'])

function conf_change(){
    emit('conf_gral_upd', props.gral)
}
</script>