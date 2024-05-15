<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const maximumQuestLevel: number = 20;

//Text Variables
const enemyTypeLabel = 'Enemy Type:';
const questTypeLabel = 'Quest Type:';
const combatLevelLabel = 'Combat Level:';
const submitBtnText = 'Submit';
const exampleQuestTypes: string = 'Some example quest types are: Combat, Exploration, Investigation, or a Dungeon Delve!'

let combatLevelInput: number = 0;
let enemyTypeInput: string = '';
let questTypeInput: string = '';

const emit = defineEmits(['questProvided']);

async function submitToOpenAi() {

    console.log('Hitting this??????');
    //The modeling is working here
    const requestObj = {combatLevelInput, enemyTypeInput, questTypeInput};

    const response = await axios.post('http://localhost:4000/openai/quest', requestObj);
    console.log(response);
    //Need to add an event handler here that will set the response to the appropriate image and P slots
    emit('questProvided', response.data);
    //If a 429 response then there are no more funds -- create specific modal or warning if that happens
    return;
}

</script>


<template>
    <div class="d-flex justify-content-around form-container">
        <div class="input-field">
        <label for="enemy-type" class="input-spacing">{{ enemyTypeLabel }}</label>
        <input v-model="enemyTypeInput" class="col-md-3" type="text" name="enemy-type" id="enemy-type"/>
        </div>

        <div class="input-field">
        <FontAwesomeIcon :icon=faCircleInfo class="input-spacing" :title=exampleQuestTypes v-b-tooltip.hover/>
        <label for="quest-type" class="input-spacing">{{ questTypeLabel }}</label>
        <input v-model="questTypeInput" class="col-md-3" type="text" name="quest-type" id="quest-type"/>
        </div>

        <div class="input-field">
        <label for="level-select" class="input-spacing">{{ combatLevelLabel }}</label>
        <select v-model="combatLevelInput" type="text" class="col-md-2" name="level-select">
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
</style>