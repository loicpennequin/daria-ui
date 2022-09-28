<script setup lang="ts">
import { useDrawer } from './useDrawer';

const { title, closable, close, colorScheme } = useDrawer();

const bg = computed(() =>
  colorScheme.value === 'light' ? 'context-1' : 'context-6'
);

const color = computed(() =>
  colorScheme.value === 'light' ? 'context-readable-1' : 'context-readable-6'
);
</script>

<template>
  <DialogTitle as="template">
    <header
      p="x-4 y-2"
      :bg="bg"
      :color="color"
      flex
      items-center
      justify-between
      sticky
      top-0
    >
      <slot>
        <span text-xl leading-none>{{ title }}</span>

        <button
          v-if="closable"
          title="close"
          w-7
          h-7
          i-mdi-close
          text-2xl
          @click="close"
        />
      </slot>
    </header>
  </DialogTitle>
</template>

<style scoped></style>
