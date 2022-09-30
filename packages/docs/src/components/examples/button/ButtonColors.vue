<script setup lang="ts">
import { DButton } from '@dariajs/ui';

const variant = ref('full');
</script>

<template>
  <div flex items-center flex-wrap gap-3>
    <DButton :variant="variant" cs-blue>Click me</DButton>
    <DButton :variant="variant" cs-green>Click me</DButton>
    <DButton :variant="variant" cs-yellow>Click me</DButton>
    <DButton :variant="variant" cs-red>Click me</DButton>
    <DButton :variant="variant" cs-violet>Click me</DButton>
  </div>
  <fieldset m-t-4>
    <legend>Variant</legend>
    <label m-r-6>
      <input v-model="variant" type="radio" value="full" />
      Full
    </label>

    <label m-r-6>
      <input v-model="variant" type="radio" value="outlined" />
      Outlined
    </label>

    <label m-r-6>
      <input v-model="variant" type="radio" value="ghost" />
      Ghost
    </label>

    <label m-r-6>
      <input v-model="variant" type="radio" value="light" />
      Light
    </label>
  </fieldset>
</template>
