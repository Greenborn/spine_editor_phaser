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
                <textarea v-model="atlas_txt" class="form-control" @input="get_sprites_from_atlas()" rows="50"></textarea>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit  = defineEmits(['sprites_upd'])

const atlas_txt = ref('')
const lineas_atlas = ref([])
const sprites = ref({})

function get_sprites_from_atlas(){
    //la primera linea se ignora por ser name de imagen
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
    //let res_ = await axios.get('http://localhost:5000/assets/atlas1.atlas')
    //if (res_){
    //    atlas_txt.value = res_.data
    //    get_sprites_from_atlas()
    //}
})

</script>