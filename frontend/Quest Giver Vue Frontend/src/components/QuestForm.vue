<script setup lang="ts">

const maximumQuestLevel: number = 20;

//Text Variables
const enemyTypeLabel = 'Enemy Type';
const questTypeLabel = 'Quest Type';
const combatLevelLabel = 'Combat Level';
const submitBtnText = 'Submit';

</script>


<template>
    <div class="d-flex justify-content-around row form-container">
        <label for="enemy-type">{{ enemyTypeLabel }}</label>
        <input class="col-md-3" type="text" name="enemy-type" id="enemy-type"/>

        <label for="quest-type">{{ questTypeLabel }}</label>
        <input class="col-md-3" type="text" name="quest-type" id="quest-type"/>

        <label for="level-select">{{ combatLevelLabel }}</label>
        <select type="text" class="col-md-2" name="level-select">
            <option v-for="n in maximumQuestLevel" :key=n >{{ n }}</option>
        </select>
    </div>
    <button class="btn btn-success col-md-3">{{ submitBtnText }}</button>
</template>


<style scoped>
.form-container {
    border-bottom: 1px solid black;
}
</style>