<script setup lang="ts">
import type { Component } from 'vue';
import DButtonFull from './DButtonFull.vue';
import DButtonOutlined from './DButtonOutlined.vue';
import DButtonGhost from './DButtonGhost.vue';
import DButtonLight from './DButtonLight.vue';
import type { ButtonVariant } from './types';

type Props = {
  variant?: ButtonVariant;
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'full'
});

const variantMap = new Map<ButtonVariant, Component>([
  ['full', DButtonFull],
  ['outlined', DButtonOutlined],
  ['ghost', DButtonGhost],
  ['light', DButtonLight]
]);

const is = computed(() => variantMap.get(props.variant));
</script>

<template>
  <component :is="is">
    <template #left><slot name="left" /></template>
    <slot />
    <template #right><slot name="right" /></template>
  </component>
</template>
