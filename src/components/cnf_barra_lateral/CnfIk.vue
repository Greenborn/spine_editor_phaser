<template>
    <div class="row">
        <div class="col">
            <h3>ik</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row border" v-for="ikk in props.json_?.spineboy?.ik" :key="ikk">
                <small>{{ ikk }}</small>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['json_'])
</script>