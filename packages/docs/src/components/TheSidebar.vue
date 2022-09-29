<script setup lang="ts">
import { snakeCase } from 'lodash-es';

const gettingStarted = [
  { label: 'Getting Started', to: '/docs/getting-started' },
  { label: 'Configuration', to: '/docs/configuration' },
  { label: 'Theming', to: '/docs/theming' }
];

const components = ['Button', 'Drawer'].map(c => ({
  label: c,
  to: `/docs/components/${snakeCase(c)}`
}));
</script>
<template>
  <nav min-w-12rem cs-blue>
    <ul space-y-5>
      <SidebarEntry title="Guide" :links="gettingStarted" />
      <SidebarEntry title="Components" :links="components" />
    </ul>
  </nav>
</template>
