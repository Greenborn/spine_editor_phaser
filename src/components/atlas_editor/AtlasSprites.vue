<template>
    <div class="cont-sprites">
        <div class="row">
            <div class="col col-md-6 col-lg-4 col-xl-3 col-xxl-2 border" v-for="sprite in props.sprites">
                {{ sprite }}
            </div>
        </div>
    </div>

</template>

<script setup>
const props = defineProps(['sprites'])
</script>

<style scoped>
.cont-sprites {
    height: calc(99vh - 6rem);
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
}
</style>
