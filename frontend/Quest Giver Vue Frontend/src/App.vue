<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue';
import QuestForm from './components/QuestForm.vue';

</script>

<template>
  <header>
    <HeaderBar />
  </header>
  <QuestForm />
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
