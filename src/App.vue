<script setup lang="ts">
import Alert from './components/Alert.vue';
</script>

<template>
  <div space-y-4>
    <Alert color-scheme="red hover:yellow" />
    <Alert color-scheme-blue />
    <Alert color-scheme-green />
    <Alert color-scheme-yellow />
    <Alert color-scheme-dark />
    <Alert color-scheme-light />
    <Alert color-scheme-gray />
  </div>
</template>
