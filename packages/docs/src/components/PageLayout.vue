<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <div flex flex-col gap-8 max-w="80ch" m-x-auto>
    <h2 id="top" text-3xl font-bold>{{ props.title }}</h2>

    <slot />

    <a href="#top" underline m-t-auto m-b-5 inline-block m-l-auto>
      Back to top
    </a>
  </div>
</template>

<style scoped></style>
