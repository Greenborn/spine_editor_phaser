<template>
  
  <AtlasPngEditor v-if="opcion_vista == 'ATLAS'" />
  <ModalsManager />
</template>

<script setup>
import { ref } from 'vue'

import VisorCmp from './components/VisorCmp.vue';
import AtlasPngEditor from './components/atlas/AtlasPngEditor.vue';
import ModalsManager from './components/generic/ModalsManager.vue';

const opcion_vista = ref('ATLAS')
</script>

<style scoped></style>
