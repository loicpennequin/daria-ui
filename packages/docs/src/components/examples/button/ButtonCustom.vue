<script setup lang="ts">
import { DButton } from '@dariajs/ui';
</script>

<template>
  <div flex items-center flex-wrap gap-3>
    <DButton
      rounded="full"
      shadow="sm hover:lg focus:lg"
      scale="hover:115"
      text-xl
      transition-all
      duration-300
      bg="gradient-to-r"
      from-violet-6
      to-cyan-4
      ring="focus:2 focus:cyan-3"
    >
      Click me
    </DButton>
  </div>
</template>
