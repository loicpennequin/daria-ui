<script setup lang="ts">
import { useSlotProps } from '@/utils/composables';
import { useDrawer } from './useDrawer';

const drawer = useDrawer();
const { title } = drawer;
const slotProps = useSlotProps(drawer);
</script>

<template>
  <TransitionChild
    as="template"
    appear
    enter="duration-300 ease-out"
    enter-from="-translate-x-full"
    enter-to="-translate-x-0"
    leave="duration-200 ease-in"
    leave-from="-translate-x-0"
    leave-to="-translate-x-full"
  >
    <DialogPanel
      as="div"
      transition-transform
      w="full"
      max-w="md"
      transform
      transition-all
      min-h-full
      overflow-y-auto
    >
      <DSurface min-h-full p="0" flex flex-col>
        <slot name="header" v-bind="slotProps">
          <DDrawerHeader v-if="title" />
        </slot>

        <div flex-1>
          <slot v-bind="slotProps" />
        </div>

        <footer bg-inherit sticky bottom-0>
          <slot name="footer" v-bind="slotProps" />
        </footer>
      </DSurface>
    </DialogPanel>
  </TransitionChild>
</template>

<style scoped></style>
