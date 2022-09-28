<script setup lang="ts">
const isOpened = ref(false);
</script>
<template>
  <button @click="isOpened = true">Open</button>
  <DDrawer v-model:is-opened="isOpened" title="My cool modal">
    <DDrawerBackdrop />
    <DDrawerContent />
  </DDrawer>
</template>
