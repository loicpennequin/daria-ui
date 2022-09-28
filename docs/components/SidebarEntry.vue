<script setup lang="ts">
type Props = {
  title: string;
  links: { to: string; label: string }[];
};
const props = defineProps<Props>();
</script>
<template>
  <li space-y-2>
    <h2 font-semibold text-lg>{{ props.title }}</h2>
    <ul>
      <li v-for="link in links" :key="link.to">
        <router-link :to="link.to" exact-active-class="color-context-6">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </li>
</template>
