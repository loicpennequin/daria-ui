<script setup lang="ts">
const isOpened = ref(false);
</script>

<template>
  <button p-3 bg-blue-3 @click="isOpened = true">Open Drawer</button>
  <DDrawer v-model:is-opened="isOpened" title="My cool Modal">
    <DDrawerBackdrop />
    <DDrawerContent>Hello</DDrawerContent>
  </DDrawer>
</template>
