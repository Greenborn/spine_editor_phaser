<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTextAtlas" aria-expanded="false" aria-controls="collapseTextAtlas">
                Editor .atlas
            </button>
        </h2>
        <div id="collapseTextAtlas" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <textarea v-model="atlas_txt" class="form-control" rows="50" disabled></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineExpose({ atlas_model_upd })

const atlas_model = ref({})

const atlas_txt = ref('')

function atlas_model_upd(_model){
    atlas_txt.value = ''
    atlas_model.value = _model
    atlas_txt.value += atlas_model.value?.gral?.img_name + '\n'
    atlas_txt.value += "size:" + atlas_model.value?.gral?.ancho + "," + atlas_model.value?.gral?.alto + ",\n"
    atlas_txt.value += atlas_model.value?.gral?.filter + "\n"
    atlas_txt.value += atlas_model.value?.gral?.pma + "\n"

    for (let i=0; i < atlas_model.value?.sprites_conf.length; i++){
        const sprite = atlas_model.value?.sprites_conf[i]
        atlas_txt.value += sprite?.name + '\n'
        atlas_txt.value += "bounds:" + sprite?.x + ',' + sprite?.y + ',' + sprite?.ancho + ',' + sprite?.alto + '\n'
    }

    return atlas_txt.value
    //console.log(atlas_model.value)   
}

</script>