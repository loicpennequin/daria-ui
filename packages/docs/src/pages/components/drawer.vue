<script setup lang="ts">
import { DDrawer, DDrawerBackdrop, DDrawerContent } from '@daria/ui';

const isOpened = ref(false);
</script>
<template>
  <button @click="isOpened = true">Open</button>
  <DDrawer v-model:is-opened="isOpened" title="My cool modal">
    <DDrawerBackdrop />
    <DDrawerContent />
  </DDrawer>
</template>
