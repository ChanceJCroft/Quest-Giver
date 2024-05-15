<template>
    <div class="row">
        <div class="col d-flex justify-content-center p-5">
            <img :src=props.questImageUrl id="" alt="" />
        </div>
        <div v-for="section in questDescriptionReference" :key="section.length">
            {{ section }}
            <br/>
            <br/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps(['questImageUrl', 'questDescription']);


let questDescriptionReference: Array<string> = ['Request a quest to get started'];


//Updates the reference, which in turns updates the UI
//This function neatly separates the text in the UI
watch(() => props.questDescription, (newVal, oldVal) => {
    console.log(newVal);
    console.log(oldVal);
    questDescriptionReference = newVal.split("\n").filter((x:string) => x != '');
})
</script>


<style scoped>
</style>