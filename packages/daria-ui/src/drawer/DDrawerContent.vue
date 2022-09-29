<script setup lang="ts">
import { useDrawer } from './useDrawer';
// const attrs = useAttrs();
const { title, size } = useDrawer();
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
      :max-w="size"
      transform
      transition-all
      min-h-full
      overflow-y-auto
    >
      <DSurface min-h-full p="0" flex flex-col>
        <slot name="header">
          <DDrawerHeader v-if="title" />
        </slot>

        <div flex-1>
          <slot />
        </div>

        <footer bg-inherit sticky bottom-0>
          <slot name="footer"></slot>
        </footer>
      </DSurface>
    </DialogPanel>
  </TransitionChild>
</template>

<style scoped></style>
