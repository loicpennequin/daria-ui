<script setup lang="ts">
import { DButton, DDrawer, DDrawerBackdrop, DDrawerContent } from '@dariajs/ui';

const isOpened = ref(false);
</script>

<template>
  <DButton @click="isOpened = true">Open drawer</DButton>

  <DDrawer v-model:is-opened="isOpened" title="My Cool Drawer">
    <DDrawerBackdrop />

    <DDrawerContent>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim
        laborum non asperiores quas voluptatem porro provident quia est amet nam
        facere corrupti repudiandae inventore, et magnam omnis laboriosam vitae.
      </p>
    </DDrawerContent>
  </DDrawer>
</template>
