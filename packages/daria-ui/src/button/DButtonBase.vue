<script setup lang="ts">
const attrs = useAttrs();

const is = computed(() => {
  if (attrs.to) return 'router-link';
  if (attrs.href) return 'a';
  return 'button';
});
</script>

<template>
  <component
    :is="is"
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
