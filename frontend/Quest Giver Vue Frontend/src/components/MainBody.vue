<template>
    <div class="row justify-content-around main-content">
        <div class="col d-flex justify-content-center m-5">
            <img :src=props.questImageUrl :id=props.questImageUrl alt="quest-img" class="quest-img" />
        </div>
        <div class="col justify-content-center m-5">
           <p v-for="section in questDescriptionReference" :key="section">
            {{ section }}
            <br/>
        </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps(['questImageUrl', 'questDescription']);


let questDescriptionReference: Array<string> = ['Request a quest to get started'];


//Updates the reference, which in turns updates the UI
//This function neatly separates the text in the UI
watch(() => props.questDescription, (newVal) => {
    let newRef = newVal.split("\n").filter((x:string) => x != '');

    //TODO logic -- Attempting to conditionally uppercase a substring upon reaching a ':'
    //Need to investigate potential issues -- i.e. What if a colon is returning not related to a title section?
    /* for(let x of newRef) {
        const split = x.split(' ')[0];
        if(split[split.length] === ':') {
            newRef[0] = split.toUpperCase()
            console.log(split[0].toUpperCase());
        }
    } */

    questDescriptionReference = newRef;
})
</script>


<style scoped>

.main-content {
    max-width: 99%;
}

.quest-img {
    height: 1024px;
    width: 1024px;
    border: 1px solid black;
}
</style>