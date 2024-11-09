<template>
    <div class="row">
        <div class="col">
            <h3>animations</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="row border" v-for="(animation, i ) in props.json_?.spineboy?.animations" :key="animation">
                <small><b>{{ i }}: </b></small>
                <div class="row border" v-for="(anima_k, j) in animation" :key="anima_k">
                    <div class="col-1"></div>
                    <div class="col-11 border">
                        <small><b>{{ j }}:</b></small>
                        <div class="row border" v-for="(anima_k_j, k) in anima_k" :key="anima_k_j">
                            <div class="col-1"></div>
                            <div class="col-11 border">
                                <small><b>{{ k }}:</b></small>
                                <div class="row border" v-for="(anima_k_j_l, l) in anima_k_j" :key="anima_k_j_l">
                                    <div class="col-1"></div>
                                    <div class="col-11 border">
                                        <small><b>{{ l }}:</b>{{ anima_k_j_l }}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['json_'])
</script>