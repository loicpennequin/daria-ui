<script setup lang="ts">
import { useDrawer } from './useDrawer';

const { title, close } = useDrawer();
</script>

<template>
  <DialogTitle as="template">
    <header
      p="x-4 y-2"
      bg-context-6
      color-context-readable-6
      flex
      items-center
      justify-between
    >
      <slot>
        <span text-lg>{{ title }}</span>

        <button
          title="close"
          w-8
          aspect-square
          i-mdi-close
          text-2xl
          @click="close"
        />
      </slot>
    </header>
  </DialogTitle>
</template>

<style scoped></style>
