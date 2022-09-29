<script setup lang="ts">
import type { ButtonVariant } from './types';

const props = withDefaults(defineProps<{ variant?: ButtonVariant }>(), {
  variant: 'ghost'
});
</script>

<template>
  <DButton
    :variant="props.variant"
    p="0"
    un-children="w-full aspect-square"
    rounded="1/2"
  >
    <slot />
  </DButton>
</template>
