<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInfo, faCircleInfo, faCircle } from '@fortawesome/free-solid-svg-icons'

//Text Variables
const titleText: string = 'Dungeons and Dragons Quest Generator';
const instructionsHoverText: string = 'Welcome! To be given a quest you must first fill in the 3 fields below. Please specificy what type of enemy you would like, what type of quest, what level, and hit Submit! Then, sit back and wait for your quest to be populated in the page below.'


</script>


<template>
    <div class="main">
        <h1 class="title">{{ titleText }}</h1>
        
    </div>
    <p><FontAwesomeIcon :icon=faCircleInfo class="icon" :title=instructionsHoverText v-b-tooltip.hover/>Instructions</p>
</template>


<style scoped>

.main {
    width: 100%;
    height: 100%;
    min-height: 15vh;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    text-align: center;
    margin: auto;
}

.icon {
    margin-right: .25em;
}


</style>