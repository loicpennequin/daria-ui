<script setup lang="ts">
import { DSurface, DIconButton } from '@dariajs/ui';

const props = defineProps<{ title: string }>();
const isSourceDisplayed = ref(false);
</script>

<template>
  <div
    border="solid 1 gray-3"
    class="code-example"
    h-xs
    overflow="x-hidden y-auto"
    m-y-8
  >
    <DSurface
      is="header"
      p="3"
      flex
      items-center
      gap-4
      cs="dark dark:light"
      sticky
      top-0
    >
      <h3 text-lg font-semibold>{{ props.title }}</h3>
      <DIconButton
        title="view source"
        m-l-auto
        @click="isSourceDisplayed = !isSourceDisplayed"
      >
        <span i-mdi-code-tags text-2xl />
      </DIconButton>
    </DSurface>

    <div grid>
      <DSurface col-start-1 row-start-1>
        <slot>This example doesn't have any preview.</slot>
      </DSurface>

      <transition
        appear
        enter-active-class="transition-all duration-200"
        leave-active-class="transition-all duration-200"
        enter-from-class="translate-x-full opacity-0"
        leave-to-class="translate-x-full opacity-0"
      >
        <div v-if="isSourceDisplayed" col-start-1 row-start-1 overflow="x-auto">
          <slot name="code">This example doesn't have any source code.</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
.code-example .code-wrapper {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
