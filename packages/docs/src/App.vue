<script setup lang="ts">
import type { AsyncComponentLoader } from 'vue';
import { useRoute } from 'vue-router';
const layoutMap = new Map<string, AsyncComponentLoader>([
  [
    'default',
    defineAsyncComponent(() => import('@/components/layouts/Default.vue'))
  ],
  [
    'no-sidebar',
    defineAsyncComponent(() => import('@/components/layouts/NoSidebar.vue'))
  ]
]);
const route = useRoute();
const layoutComponent = computed(() =>
  layoutMap.get((route.meta.layout as string) || 'default')
);
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>
