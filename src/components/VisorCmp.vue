<template>
  <div class="row">
    <div class="col-7">
      <iframe class="visor-iframe" src="http://localhost:5000" frameborder="0"></iframe>
    </div>

    <div class="col-5">
      <BarraLateral />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarraLateral from './BarraLateral.vue'
</script>

<style scoped>;
.visor-iframe{
  width: 100%;
  height: 80vh;
  background: #ddd;
}
</style>
