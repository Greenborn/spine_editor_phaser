<template>
  <div class="row">
    <div class="col-7">
      <div class="zona_bones">
          <div class="bone_data" v-for="bone in bones?.diccio"  
            :style="{
                        top: (bone.y + 600) + 'px', 
                        left: (bone.x + 400) + 'px',
                        width: 2 + 'px',
                        height: bone?.length ? bone.length : 1 + 'px',
                        transform: 'rotate(' + bone?.rotation + 'deg)',
                        'transform-origin': 'center'
                    }"    
          >
          </div>
      </div>
      <iframe class="visor-iframe" src="http://localhost:5000" frameborder="0"></iframe>
    </div>

    <div class="col-5">
      <BarraLateral @bones_upd="bones_updated"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarraLateral from './BarraLateral.vue'

const bones = ref({})

function bones_updated( bones_ ){
  bones.value = bones_
}
</script>

<style scoped>;
.visor-iframe{
  width: 100%;
  height: 80vh;
  background: #ddd;
}


.zona_bones{
    position: absolute;
}

.bone_data{
    position: absolute;
    border: 1px solid red;
    text-overflow: clip;
    background: rgba(0, 0, 0, 0.2);
}
</style>
