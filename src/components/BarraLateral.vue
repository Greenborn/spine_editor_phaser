<template> 
<div class="row" style="max-height: 100vh; overflow-y: scroll;">
    <div class="col">

        <div class="row">
            <div class="col">
                <h3>skeleton</h3> 
            </div>
        </div>

        <div class="row">
            <div class="col">
                {{ json_?.spineboy?.skeleton }}
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>bones</h3> 
            </div>
        </div>

        <div class="row">
            <div class="col">

                <div class="row border" v-for="bone_0 in bones_tree" :key="bone_0">
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
                                        <div class="row border" v-for="bone_3 in bone_2?.children" :key="bone_3">
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
                [<span v-for="bone_0 in json_?.spineboy?.bones" :key="bone_0">"{{ bone_0.name }}", </span>] <b>{{ json_?.spineboy?.bones.length }}</b>
            </div> 
        </div>

        <div class="row">
            <div class="col">
                <h3>slots</h3> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row border" v-for="slot in json_?.spineboy?.slots" :key="slot">
                    <small>"{{ slot }}"</small>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>ik</h3> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row border" v-for="ikk in json_?.spineboy?.ik" :key="ikk">
                    <small>{{ ikk }}</small>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>transform</h3> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row border" v-for="trans in json_?.spineboy?.transform" :key="trans">
                    <small>{{ trans }}</small>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>skins</h3> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row border" v-for="skin in json_?.spineboy?.skins" :key="skin">
                    <small>{{ skin }}</small>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>events</h3> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                {{ json_?.spineboy?.events }}
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>animations</h3> 
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row border" v-for="(animation, i ) in json_?.spineboy?.animations" :key="animation">
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
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const json_ = ref()
const bones_diccio = ref({})
const bones_tree = ref({})

function get_text_bone( bone_data ){
    let keys_ = Object.keys(bone_data)
    let text = ''
    for (let i = 0; i < keys_.length; i++) {
        const key = keys_[i];
        if (key == 'children')
            continue
        text += '<b>'+key + '</b>: ' +bone_data[key] + ' '
    }
    return text
}

onMounted(async ()=>{
    let res_ = await axios.get('http://localhost:5000/assets/demos.json')
    if (res_){
        json_.value = res_.data

        for (let i = 0; i < json_.value.spineboy.bones.length; i++) 
            bones_diccio.value[json_.value.spineboy.bones[i].name] = {...json_.value.spineboy.bones[i], children: []}
        
        for (let i = 0; i < json_.value.spineboy.bones.length; i++) {
            const BONE = json_.value.spineboy.bones[i]
            
            if (!BONE.parent)
                bones_tree.value[BONE.name] = bones_diccio.value[BONE.name]
            else
                bones_diccio.value[BONE.parent].children.push(bones_diccio.value[BONE.name])
        }

        console.log(bones_tree.value)
    }
})
</script>