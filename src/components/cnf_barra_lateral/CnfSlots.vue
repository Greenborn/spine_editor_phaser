<template>
    <div class="row">
        <div class="col">
            <h3>slots <small>{{ props.json_?.spineboy?.slots.length }}</small></h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row border" v-for="slot in json_?.spineboy?.slots" :key="slot">
                <small>"{{ slot }}"</small>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['json_'])
</script>