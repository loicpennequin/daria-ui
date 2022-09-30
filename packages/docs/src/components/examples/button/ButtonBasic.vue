<script setup lang="ts">
import { DButton } from '@dariajs/ui';
</script>

<template>
  <div flex items-center flex-wrap gap-3>
    <DButton>Click me</DButton>
    <DButton variant="outlined">Click me</DButton>
    <DButton variant="ghost">Click me</DButton>
    <DButton variant="light">Click me</DButton>
  </div>
</template>
