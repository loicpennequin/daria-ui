<script setup lang="ts">
import { DButton } from '@dariajs/ui';
import { useHead } from '@vueuse/head';
import SmileyFace from '../components/SmileyFace.vue';
useHead({
  title: 'Daria UI'
});
</script>

<template>
  <div h="50vh" w-full grid place-content-center p-x-3>
    <div text-center>
      <SmileyFace :size="200" m-x-auto />
      <h1
        font-extrabold
        bg="clip-text gradient-to-r"
        from="violet-6"
        to="cyan-5"
        text="transparent 5xl sm:9xl"
      >
        Daria-UI
      </h1>
      <p text="lg sm:2xl" color="black dark:white">
        No nonsense UI Library for
        <span color-blue-6 font-extrabold>Vue 3</span>
        powered by
        <span color-blue-6 font-extrabold>UnoCSS</span>
      </p>

      <footer flex items-center justify-around m-bs-8 gap-4>
        <transition
          appear
          enter-active-class="transition-all duration-500"
          enter-from-class="-translate-x-1/2 opacity-0"
        >
          <DButton
            is="router-link"
            cs-violet
            rounded="full"
            un-text="lg sm:xl"
            to="/docs/getting-started"
          >
            Getting Started
          </DButton>
        </transition>

        <transition
          appear
          enter-active-class="transition-all duration-500"
          enter-from-class="translate-x-1/2 opacity-0"
        >
          <DButton
            is="router-link"
            cs-blue
            rounded="full"
            un-text="lg sm:xl"
            to="/docs/why-daria-ui"
            color="white"
          >
            Why Daria UI ?
          </DButton>
        </transition>
      </footer>
    </div>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "layout": "no-sidebar"
  }
}
</route>
