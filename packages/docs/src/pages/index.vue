<script setup lang="ts">
import { DButton } from '@daria/ui';
</script>
<template>
  <div h="50vh" w-full grid place-content-center p-x-3>
    <div text-center>
      <h1
        font-extrabold
        bg="clip-text gradient-to-r"
        from="violet-6"
        to="cyan-5"
        text="transparent 5xl sm:9xl"
        text-stroke="1 sm:3 black dark:white"
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
        <DButton
          is="router-link"
          cs-blue
          rounded="full"
          un-text="lg sm:2xl"
          to="/docs/getting-started"
        >
          Getting Started
        </DButton>
        <DButton
          is="router-link"
          cs-cyan
          rounded="full"
          un-text="lg sm:2xl"
          to="/docs/why-daria-ui"
        >
          Why Daria UI ?
        </DButton>
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
