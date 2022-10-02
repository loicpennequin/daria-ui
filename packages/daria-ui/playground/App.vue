<script setup lang="ts">
import { useToast } from '../src/toast/useToast';

const { showError } = useToast();

const showToast = () => {
  showError({
    title: 'I am a toast',
    text: '...and I have a desription'
  });
};
</script>

<template>
  <div cs-blue>
    <DButton @click="showToast">Show Toast</DButton>

    <DToastBar />
  </div>
</template>
