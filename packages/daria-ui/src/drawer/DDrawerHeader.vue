<script setup lang="ts">
import { useSlotProps } from '@/utils/composables';
import { useDrawer } from './useDrawer';

const drawer = useDrawer();
const { title, closable, close, colorScheme } = drawer;
console.log(colorScheme.value);
const bg = computed(() =>
  colorScheme.value === 'light' ? 'white' : 'context-6'
);

const color = computed(() =>
  colorScheme.value === 'light' ? 'readable-1' : 'readable-6'
);

const slotProps = useSlotProps(drawer);
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
      <slot v-bind="slotProps">
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
