<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import type { Quest } from '@/interfaces/interfaces'
import 'dotenv'

const maximumQuestLevel: number = 20;
const emit = defineEmits(['questProvided', 'isLoading']);

//Text Variables
const enemyTypeLabel = 'Enemy Type:';
const questTypeLabel = 'Quest Type:';
const combatLevelLabel = 'Combat Level:';
const submitBtnText = 'Submit';
const exampleQuestTypes: string = 'Some example quest types are: Combat, Exploration, Investigation, or a Dungeon Delve!';

//V-Models that will change as the inputs change
let combatLevel: number = 0;
let enemyType: string = '';
let questType: string = '';

//Fallback Error Quest Info
const fallbackQuest: Quest = {
    quest: "I'm sorry, but it appears there was an issue with your request! Please send me an email at chance.croft2@gmail.com to let me know!",
    image: 'https://imageio.forbes.com/specials-images/dam/imageserve/1138532387/960x0.jpg?height=473&width=711&fit=bounds'
}

async function submitToOpenAi() {
    emit('isLoading');
    const requestObj = {combatLevel, enemyType, questType};

    const response = await axios.post('http://localhost:4000/openai/quest', requestObj);
    
    //TODO -- Clean up error handling. Prepare specific responses for each of the error types: https://platform.openai.com/docs/guides/error-codes/api-errors
    if(response.status > 400) {
        emit('questProvided', fallbackQuest)
    } else {
        emit('questProvided', response.data);
    }
    
    emit('isLoading');
}

</script>


<template>
    <div class="d-flex justify-content-around form-container">
        <div class="input-field">
            <label for="enemy-type" class="input-spacing">{{ enemyTypeLabel }}</label>
            <input v-model="enemyType" class="col-md-3" type="text" name="enemy-type" id="enemy-type"/>
        </div>

        <div class="input-field">
            <a :data-title=exampleQuestTypes><FontAwesomeIcon :icon=faCircleInfo class="input-spacing" /></a>
            <label for="quest-type" class="input-spacing">{{ questTypeLabel }}</label>
            <input v-model="questType" class="col-md-3" type="text" name="quest-type" id="quest-type"/>
        </div>

        <div class="input-field">
            <label for="level-select" class="input-spacing">{{ combatLevelLabel }}</label>
            <select v-model="combatLevel" type="text" class="col-md-2" name="level-select">
                <option v-for="n in maximumQuestLevel" :key=n :value=n>{{ n }}</option>
            </select>
        </div>
    </div>
    <button class="btn btn-success col-md-3 submit mt-3" v-on:click="submitToOpenAi">{{ submitBtnText }}</button>
</template>


<style scoped>

.form-container {
    display: flex;
    justify-content: center;
    text-align: center;
}

.input-field {
    min-width: 33%;
}

.submit {
    text-align: center;
    margin: auto;
    width: 25%;
    justify-content: center;
    display: flex;
}

.input-spacing {
    margin-right: .25em;
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