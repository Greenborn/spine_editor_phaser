<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <button type="button" class="btn btn-primary  m-1" @click="opcion_vista = 'VISOR'">Visor</button>
      <button type="button" class="btn btn-primary  m-1" @click="opcion_vista = 'ATLAS'">Atlas</button>

    </div>
  </div>

  <VisorCmp v-if="opcion_vista == 'VISOR'" />
  <AtlasPngEditor v-if="opcion_vista == 'ATLAS'" />

</template>

<script setup>
import { ref } from 'vue'

import BarraLateral from './components/BarraLateral.vue';
import VisorCmp from './components/VisorCmp.vue';
import AtlasPngEditor from './components/AtlasPngEditor.vue';
import AtlasTxtEditor from './components/AtlasTxtEditor.vue';

const opcion_vista = ref('VISOR')
</script>

<style scoped></style>
