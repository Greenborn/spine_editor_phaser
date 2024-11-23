<template>
    <div class="cont-sprites">
        <div class="row">
            <div class="col col-md-6 col-lg-4 col-xl-3 col-xxl-2 border text-center" 
                v-for="(sprite, index) in props.sprites.sprites_conf">
                <img class="w-100" :src="sprite?.img_data?.src" />
                
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <Button severity="danger" icon="pi pi-trash" class="m-1"
                            raised rounded size="small" @click="delete_sprite(index)" />
                        <Button severity="info" icon="pi pi-arrow-left" class="m-1"
                            raised rounded size="small" @click="to_left(index)" />
                        <Button severity="info" icon="pi pi-arrow-right" class="m-1"
                            raised rounded size="small" @click="to_right(index)" />
                    </div>
                </div>

                <p><b>{{ sprite?.name }}</b></p>
            </div>
        </div>
    </div>

</template>

<script setup>

const emit  = defineEmits(['sprites_upd'])
const props = defineProps(['sprites'])

function delete_sprite(index){
    props.sprites.sprites_conf.splice(index, 1)
    emit('sprites_upd', props.sprites)
}

function to_left(index){
    if (index == 0){
        let elemento = props.sprites.sprites_conf.splice(index, 1)[0]
        props.sprites.sprites_conf.push(elemento)
        emit('sprites_upd', props.sprites)
        return
    }
    let elemento = props.sprites.sprites_conf.splice(index, 1)[0]
    props.sprites.sprites_conf.splice(index-1, 0, elemento)
    emit('sprites_upd', props.sprites)
}

function to_right(index){
    if (index == props.sprites.sprites_conf.length - 1){
        let elemento = props.sprites.sprites_conf.splice(index, 1)[0]
        props.sprites.sprites_conf.unshift(elemento)
        emit('sprites_upd', props.sprites)
        return
    }
    let elemento = props.sprites.sprites_conf.splice(index, 1)[0]
    props.sprites.sprites_conf.splice(index+1, 0, elemento)
    emit('sprites_upd', props.sprites)
}
</script>

<style scoped>
.cont-sprites {
    height: calc(99vh - 6rem);
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
}
</style>
