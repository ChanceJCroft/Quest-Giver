<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue';
import QuestForm from './components/QuestForm.vue';
import MainBody from './components/MainBody.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import { ref } from 'vue';
import type { Quest } from './interfaces/interfaces';

//Computed properties
let questText = ref('Here is where your Quest will appear!');
let questImageUrl = ref('https://www.worldanvil.com/uploads/images/17d789f01625ddd3d2d9b7f32eab9e9d.jpg');
let isLoading = ref(false);


function setIsLoading() {
  isLoading.value = !isLoading.value;
}


function newQuest(quest: Quest) {
  questText.value = quest.quest;
  questImageUrl.value = quest.image;
}

</script>

<template>
  <header>
    <HeaderBar />
  </header>
  <QuestForm @quest-provided="newQuest" @is-loading="setIsLoading"/>
  <LoadingSpinner v-show="isLoading" />
  <MainBody v-show="!isLoading" :quest-image-url="questImageUrl" :quest-description="questText"/>
</template>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}

header {
  width: 100%;
  margin: 0;
}
</style>
