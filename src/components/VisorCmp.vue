<template>
  <div class="row">
    <div class="col">
      <iframe class="visor-iframe" src="http://localhost:8080" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>;
.visor-iframe{
  width: 100%;
  height: 80vh;
  background: #ddd;
}
</style>
