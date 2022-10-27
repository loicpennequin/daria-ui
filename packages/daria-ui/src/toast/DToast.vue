<script setup lang="ts">
const props = defineProps<{
  isOpened: boolean;
  colorScheme: string;
  icon: string;
}>();

const emit = defineEmits<{
  (e: 'update:isOpened', value: boolean): void;
}>();

const color = computed(
  () => `${props.colorScheme}-5 dark:${props.colorScheme}-2`
);
</script>

<template>
  <DSurface
    role="alert"
    :cs="props.colorScheme"
    p="3"
    border-t="solid 8"
    border-t-color="context-5 dark:context-2"
    rounded="lg"
    outline="solid 1 black/10 dark:white/10"
    grid
    grid-cols="$cols"
    items-center
    gap-4
    style="--cols: auto 1fr auto"
    un-cloak
  >
    <DToastIcon :icon="props.icon" color="context-5 dark:context-2" />
    <div color="inherit" no-underline @click="emit('update:isOpened', false)">
      <slot />
    </div>

    <DIconButton
      m-l-auto
      m-t="-2"
      color-scheme="dark"
      self-start
      @click="emit('update:isOpened', false)"
    >
      <span i-mdi-close />
    </DIconButton>
  </DSurface>
</template>
