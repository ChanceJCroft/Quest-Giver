<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue';
import QuestForm from './components/QuestForm.vue';
import MainBody from './components/MainBody.vue';
import { ref } from 'vue';

interface Quest {
  quest: string,
  image: string,
}

let questText = ref('Test quest text');
let questImageUrl = ref('https://www.worldanvil.com/uploads/images/17d789f01625ddd3d2d9b7f32eab9e9d.jpg');





function newQuest(quest: Quest) {
  questText.value = quest.quest;
  questImageUrl.value = quest.image;
}

</script>

<template>
  <header>
    <HeaderBar />
  </header>
  <QuestForm @quest-provided="newQuest"/>
  <MainBody :quest-image-url="questImageUrl" :quest-description="questText"/>
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
