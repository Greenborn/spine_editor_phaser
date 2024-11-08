<template>
  <div class="row">
    <div class="col-7 border">
      <div class="row justify-content-center">
        <div class="col-auto">
          <button type="button" class="btn btn-primary" @click="opcion_vista = 'VISOR'">Visor</button>
          <button type="button" class="btn btn-primary" @click="opcion_vista = 'ATLAS'">Atlas</button>
        </div>
      </div>
      <VisorCmp     v-if="opcion_vista == 'VISOR'"/>
      <AtlasEditor  v-if="opcion_vista == 'ATLAS'"/>
    </div>
    <div class="col-5 border">
      <BarraLateral />
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

import BarraLateral from './components/BarraLateral.vue';
import VisorCmp from './components/VisorCmp.vue';
import AtlasEditor from './components/AtlasEditor.vue';

const opcion_vista = ref('VISOR')
</script>

<style scoped>

</style>
