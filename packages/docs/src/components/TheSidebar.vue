<script setup lang="ts">
import { kebabCase } from 'lodash-es';
import SidebarEntry from './SidebarEntry.vue';

const gettingStarted = [
  { label: 'Why Daria UI ?', to: '/docs/why-daria-ui' },
  { label: 'Getting Started', to: '/docs/getting-started' },
  { label: 'Configuration', to: '/docs/configuration' },
  { label: 'Theming', to: '/docs/theming' }
];

const components = ['Button', 'ButtonGroup', 'Drawer'].map(c => ({
  label: c,
  to: `/docs/components/${kebabCase(c)}`
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
