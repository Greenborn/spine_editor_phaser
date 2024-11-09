<template>
    <div class="row">
        <div class="col">
            <h3>transform</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row border" v-for="trans in props.json_?.spineboy?.transform" :key="trans">
                <small>{{ trans }}</small>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['json_'])
</script>