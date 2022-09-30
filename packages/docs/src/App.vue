<script setup lang="ts">
import { useRoute } from 'vue-router';

const layoutMap = new Map<string, any>();
layoutMap.set(
  'default',
  defineAsyncComponent(() => import('@/components/layouts/Default.vue'))
);
layoutMap.set(
  'no-sidebar',
  defineAsyncComponent(() => import('@/components/layouts/NoSidebar.vue'))
);

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
