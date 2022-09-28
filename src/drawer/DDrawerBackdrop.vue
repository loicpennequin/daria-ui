<script setup lang="ts">
const props = withDefaults(defineProps<{ useColorScheme?: boolean }>(), {
  useColorScheme: false
});

const bg = computed(() => (props.useColorScheme ? 'context-9/50' : 'black/50'));
</script>

<template>
  <TransitionChild
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div fixed inset-0 :bg="bg" transition-opacity />
  </TransitionChild>
</template>
