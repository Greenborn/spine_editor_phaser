<template>
    <div class="cont-img">
        <div class="zona_sprites">
            <div class="sprite_data" v-for="sprite in props.sprites" :style="{
                top: sprite.bounds.y + 'px',
                left: sprite.bounds.x + 'px',
                width: sprite.bounds.w + 'px',
                height: sprite.bounds.h + 'px',
                transform: 'rotate(' + sprite?.rotate + 'deg)',
                'transform-origin': 'center'
            }">
                <span class="extra_data">{{ sprite.name }}</span>
            </div>
        </div>
        <img class="border" src="http://localhost:5000/assets/atlas1.png" />
    </div>
</template>

<script setup>
const props = defineProps(['sprites'])
</script>

<style scoped>
.cont-img {
    width: 100%;
    height: 99vh;
    overflow: scroll;
    background: #c2c2c2;
    position: relative;
}

.zona_sprites {
    position: relative;
}

.sprite_data {
    position: absolute;
    border: 1px solid red;
    text-overflow: clip;
    background: rgba(0, 0, 0, 0.2);
}

</style>