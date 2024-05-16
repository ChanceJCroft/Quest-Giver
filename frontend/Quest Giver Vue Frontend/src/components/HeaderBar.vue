<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

//Text Variables
const titleText: string = 'Dungeons and Dragons Quest Generator';
const instructionsHoverText: string = 'Welcome! To be given a quest you must first fill in the 3 fields below and hit Submit!'
const instructionsTitle: string = 'Instructions';

</script>


<template>
    <div class="main">
        <h1 class="title">{{ titleText }}</h1>
        
    </div>
    <div class="d-flex justify-content-center align-middle">
        <a :data-title="instructionsHoverText"><FontAwesomeIcon :icon=faCircleInfo class="icon pt-1" /></a>
        <p>{{ instructionsTitle }}</p>
    </div>
</template>


<style scoped>

.main {
    width: 100%;
    height: 100%;
    min-height: 15vh;
    background-image: url('../assets/images/header-banner.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    text-align: center;
    margin: auto;
    color: white;
}

.icon {
    margin-right: .25em;
}

.instructions {
    display: flex;
    justify-content: center;
}

[data-title]:hover:after {
    opacity: 1;
    transition: all 0.1s ease 0.5s;
    visibility: visible;
}
[data-title]:after {
    content: attr(data-title);
    position: absolute;
    bottom: -1.6em;
    left: 100%;
    padding: 4px 4px 4px 8px;
    color: #222;
    white-space: nowrap; 
    -moz-border-radius: 5px; 
    -webkit-border-radius: 5px;  
    border-radius: 5px;  
    -moz-box-shadow: 0px 0px 4px #222;  
    -webkit-box-shadow: 0px 0px 4px #222;  
    box-shadow: 0px 0px 4px #222;  
    background-image: -moz-linear-gradient(top, #f8f8f8, #cccccc);  
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #f8f8f8),color-stop(1, #cccccc));
    background-image: -webkit-linear-gradient(top, #f8f8f8, #cccccc);  
    background-image: -moz-linear-gradient(top, #f8f8f8, #cccccc);  
    background-image: -ms-linear-gradient(top, #f8f8f8, #cccccc);  
    background-image: -o-linear-gradient(top, #f8f8f8, #cccccc);
    opacity: 0;
    z-index: 99999;
    visibility: hidden;
}
[data-title] {
    position: relative;
}


</style>