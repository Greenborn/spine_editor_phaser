<template> 
<div class="row" style="max-height: 100vh; overflow-y: scroll;">
    <div class="col">
        <CnfSkeleton :json_="json_" />
        <CnfBones :json_="json_" :bones_tree="json_?.spineboy?.bones" />
        <CnfSlots :json_="json_"  />
        <CnfIk :json_="json_"  />
        <CnfTransforms :json_="json_"  />
        <CnfSkins :json_="json_"  />
        <CnfEvents :json_="json_"  />
        <CnfAnimaciones :json_="json_"  />
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CnfAnimaciones from './cnf_barra_lateral/CnfAnimaciones.vue';
import CnfEvents from './cnf_barra_lateral/CnfEvents.vue';
import CnfSkins from './cnf_barra_lateral/CnfSkins.vue';
import CnfIk from './cnf_barra_lateral/CnfIk.vue';
import CnfTransforms from './cnf_barra_lateral/CnfTransforms.vue';
import CnfSlots from './cnf_barra_lateral/CnfSlots.vue';
import CnfBones from './cnf_barra_lateral/CnfBones.vue';
import CnfSkeleton from './cnf_barra_lateral/CnfSkeleton.vue';
//los slots se usan con los skins, ¿lugares donde definir "items"?
//https://medium.com/@kestrelm/2d-skeletal-animation-in-phaser-3-tutorial-3ed468fb6bd0
const emit = defineEmits(['bones_upd'])

const json_ = ref()
const bones_diccio = ref({})
const bones_tree = ref({})

onMounted(async ()=>{
    let res_ = await axios.get('http://localhost:5000/assets/demos.json')
    if (res_){
        json_.value = res_.data

        for (let i = 0; i < json_.value.spineboy.bones.length; i++) 
            bones_diccio.value[json_.value.spineboy.bones[i].name] = {...json_.value.spineboy.bones[i], children: []}
        
        for (let i = 0; i < json_.value.spineboy.bones.length; i++) {
            const BONE = json_.value.spineboy.bones[i]
            
            if (!BONE.parent)
                bones_tree.value[BONE.name] = bones_diccio.value[BONE.name]
            else
                bones_diccio.value[BONE.parent].children.push(bones_diccio.value[BONE.name])
        }

        emit('bones_upd', { diccio: bones_diccio.value, tree: bones_tree.value })
    }
})
</script>