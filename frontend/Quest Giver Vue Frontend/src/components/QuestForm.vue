<script setup lang="ts">

const maximumQuestLevel: number = 20;

</script>


<template>
    <div class="d-flex justify-content-around row">
        <input class="col-md-3" type="text" name="enemy-type" id="enemy-type"/>
        <input class="col-md-3" type="text" name="quest-type" id="quest-type"/>
        <select type="text" class="col-md-2">
            <option v-for="n in maximumQuestLevel" :key=n >{{ n }}</option>
        </select>
    </div>
    <button class="btn btn-success col-md-3">Submit</button>
</template>


<style scoped>

</style>