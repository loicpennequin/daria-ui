<script setup lang="ts">
const isOpened = ref(false);
</script>

<template>
  <DButton @click="isOpened = true">Open Drawer</DButton>

  <DDrawer v-model:is-opened="isOpened" title="Drawer">
    <DDrawerBackdrop />
    <DDrawerContent max-w="sm">Hello</DDrawerContent>
  </DDrawer>
</template>
