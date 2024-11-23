<template>
    <div class="cont-img">
        <div class="zona_sprites">
            <div class="sprite_data" v-for="sprite in props.sprites?.sprites_conf" :style="{
                top: sprite?.y + 'px',
                left: sprite?.x + 'px',
                width: sprite?.ancho + 'px',
                height: sprite?.alto + 'px',
                transform: 'rotate(' + sprite?.rotate + 'deg)',
                'transform-origin': 'center'
            }">
                <span class="extra_data">{{ sprite.name }}</span>
            </div>
        </div>
        <img v-if="sprites.atlas_img_src != ''" class="border" :src="sprites.atlas_img_src" />
    </div>
</template>

<script setup>
const props = defineProps(['sprites'])

</script>

<style scoped>
.cont-img {
    width: 100%;
    height: calc(99vh - 6rem);
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