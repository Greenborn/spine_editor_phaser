<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseBones" aria-expanded="false" aria-controls="collapseBones">
                    Bones
                </button>
            </h2>
            <div id="collapseBones" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col">

                            <div class="row border" v-for="bone_0 in props.bones_tree" :key="bone_0">
                                <div class="col-1"></div>
                                <div class="col-11 border">
                                    <small v-html="get_text_bone(bone_0)"></small>
                                    <div class="row border" v-for="bone_1 in bone_0?.children" :key="bone_1">
                                        <div class="col-1"></div>
                                        <div class="col-11 border">
                                            <small v-html="get_text_bone(bone_1)"></small>
                                            <div class="row border" v-for="bone_2 in bone_1?.children" :key="bone_2">
                                                <div class="col-1"></div>
                                                <div class="col-11 border">
                                                    <small v-html="get_text_bone(bone_2)"></small>
                                                    <div class="row border" v-for="bone_3 in bone_2?.children"
                                                        :key="bone_3">
                                                        <div class="col-1"></div>
                                                        <div class="col-11 border">
                                                            <small v-html="get_text_bone(bone_3)"></small>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="row border">
                        <div class="col">
                            [<span v-for="bone_0 in props.json_?.spineboy?.bones" :key="bone_0">"{{ bone_0.name }}",
                            </span>] <b>{{
                                props.json_?.spineboy?.bones.length }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['json_', 'bones_tree'])

function get_text_bone(bone_data) {
    let keys_ = Object.keys(bone_data)
    let text = ''
    for (let i = 0; i < keys_.length; i++) {
        const key = keys_[i];
        if (key == 'children')
            continue
        text += '<b>' + key + '</b>: ' + bone_data[key] + ' '
    }
    return text
}
</script>