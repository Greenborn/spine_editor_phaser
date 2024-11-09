<template>
    <div class="row">
        <div class="col">
            <h3>skeleton</h3>
        </div>
    </div>

    <div class="row">
        <div class="col">
            {{ props.json_?.spineboy?.skeleton }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['json_'])
</script>