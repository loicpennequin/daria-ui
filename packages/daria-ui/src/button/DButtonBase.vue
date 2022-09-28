<script setup lang="ts">
import type { Component } from 'vue';
// import { vRipple } from '@/modules/ui/directives/vRipple';

type Props = {
  leftIcon?: string;
  rightIcon?: string;
  isLoading?: boolean;
  hasRipple?: boolean;
  is?: string | Component;
};

const props = withDefaults(defineProps<Props>(), {
  leftIcon: '',
  rightIcon: '',
  isLoading: false,
  hasRipple: false,
  is: 'button'
});

const attrs = useAttrs();
</script>

<template>
  <component
    :is="'button'"
    :cursor="!attrs.disabled && 'pointer'"
    select-none
    no-underline
    whitespace-nowrap
    align-middle
    p="x-3 y-2"
    flex
    items-center
    justify-center
    font="semibold"
    rounded
    border="solid 1 transparent"
    outline="focus:none"
    ring="transparent focus-visible:brand-4 2"
    :disabled="isLoading || $attrs.disabled"
  >
    <span
      v-if="props.leftIcon"
      m-r="2"
      :m-l="-1"
      :i="props.leftIcon"
      block
      h-full
      aspect-square
    />

    <slot />

    <span
      v-if="props.rightIcon"
      m-l="2"
      :m-r="-1"
      :i="props.rightIcon"
      block
      h-full
      aspect-square
    />
  </component>
</template>
