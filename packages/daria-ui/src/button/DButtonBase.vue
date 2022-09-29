<script setup lang="ts">
import type { Component } from 'vue';

type Props = {
  is?: string | Component;
};

const props = withDefaults(defineProps<Props>(), {
  is: 'button'
});

const attrs = useAttrs();
</script>

<template>
  <component
    :is="props.is"
    :cursor="!attrs.disabled && 'pointer'"
    select-none
    no-underline
    whitespace-nowrap
    align-middle
    p="x-0.75em y-0.5em"
    flex
    items-center
    justify-center
    font="semibold"
    rounded
    border="solid 1 transparent"
    outline="focus:none"
    ring="transparent focus-visible:brand-4 2"
  >
    <slot />
  </component>
</template>
