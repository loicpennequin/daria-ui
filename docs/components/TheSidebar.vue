<script setup lang="ts">
import { snakeCase } from 'lodash-es';

const gettingStarted = [
  { label: 'Installation', to: '/getting-started/installation' },
  { label: 'Configuration', to: '/getting-started/configuration' },
  { label: 'Theming', to: '/getting-started/theming' }
];

const components = ['Button', 'Drawer'].map(c => ({
  label: c,
  to: `/components/${snakeCase(c)}`
}));
</script>
<template>
  <nav min-w-12rem bg-white>
    <ul space-y-5>
      <SidebarEntry title="GettingStarted" :links="gettingStarted" />
      <SidebarEntry title="Components" :links="components" />
    </ul>
  </nav>
</template>
