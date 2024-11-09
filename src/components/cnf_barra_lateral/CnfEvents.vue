<template>
    <div class="row">
        <div class="col">
            <h3>events</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            {{ props.json_?.spineboy?.events }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['json_'])
</script>