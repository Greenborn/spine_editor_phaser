<template>
    <div class="row">
        <div class="col">
            <textarea v-model="atlas_txt" class="form-control" @input="get_sprites_from_atlas()" rows="50"></textarea>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const emit  = defineEmits(['sprites_upd'])

const atlas_txt = ref('')
const lineas_atlas = ref([])
const sprites = ref({})

function get_sprites_from_atlas(){
    //la primera linea se ignora por ser nombre de imagen
    //la segunda por corresponder al tamaño
    //la tercera por ser conf filtros
    //la cuarta pma:true no se que es
    let element = {}
    lineas_atlas.value = atlas_txt.value.split('\n')
    for (let index = 4; index < lineas_atlas.value.length; index++) {
        const line = lineas_atlas.value[index]
        if (line == '') continue

        if (line.includes('/')){
            element = {
                name: line.replace('\r',''),
                bounds: []
            }
        } else 
        if (line.includes('rotate')){
            element['rotate'] = line.replace('\r','').split(':')[1]
        } else 
        if (line.includes('bounds')){
            let coords = line.replace('\r','').split(':')[1].split(',')
            element.bounds = { 
                x: Number(coords[0]), y: Number(coords[1]),
                w: Number(coords[2]), h: Number(coords[3]) 
            }
            
            sprites.value[element.name] = element
        }
        emit('sprites_upd', sprites.value)
    }
}

onMounted(async ()=>{
    let res_ = await axios.get('http://localhost:5000/assets/atlas1.atlas')
    if (res_){
        atlas_txt.value = res_.data
        get_sprites_from_atlas()
    }
})

</script>