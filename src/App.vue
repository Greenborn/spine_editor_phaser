<template>
  <!--<div class="row justify-content-center">
    <div class="col-auto">
      <button type="button" class="btn btn-primary  m-1" @click="opcion_vista = 'ATLAS'">Atlas</button>
      <button type="button" class="btn btn-primary  m-1" @click="opcion_vista = 'VISOR'">Visor</button>
    </div>
  </div>-->

  <!--<VisorCmp v-if="opcion_vista == 'VISOR'" />-->
  <AtlasPngEditor v-if="opcion_vista == 'ATLAS'" />
  <ModalsManager />
</template>

<script setup>
import { ref } from 'vue'

import VisorCmp from './components/VisorCmp.vue';
import AtlasPngEditor from './components/AtlasPngEditor.vue';
import ModalsManager from './components/generic/ModalsManager.vue';

const opcion_vista = ref('ATLAS')
</script>

<style scoped></style>
