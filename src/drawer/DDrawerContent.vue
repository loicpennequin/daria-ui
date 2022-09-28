<script setup lang="ts">
import { useDrawer } from './useDrawer';
// const attrs = useAttrs();
const { title, size } = useDrawer();
</script>

<template>
  <TransitionChild
    as="template"
    enter="duration-200 ease-out"
    enter-from="-translate-x-full"
    enter-to="-translate-x-0"
    leave="duration-200 ease-in"
    leave-from="-translate-x-0"
    leave-to="-translate-x-full"
  >
    <DialogPanel
      as="div"
      bg="white dark:dark-2"
      color="inherit"
      transition-transform
      w="full"
      :max-w="size"
      transform
      transition-all
      min-h-full
      overflow-y-auto
    >
      <slot name="header">
        <DDrawerHeader v-if="title" />
      </slot>

      <slot />
    </DialogPanel>
  </TransitionChild>
</template>

<style scoped></style>
