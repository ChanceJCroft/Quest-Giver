<script setup lang="ts">

//Text Variables
const titleText: string = 'Dungeons and Dragons Quest Generator';


</script>


<template>
    <div class="main">
        <h1 class="title">{{ titleText }}</h1>
    </div>
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


</style>