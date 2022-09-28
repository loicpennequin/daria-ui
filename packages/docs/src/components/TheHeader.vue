<script setup lang="ts">
import { DDrawer, DDrawerContent, DDrawerBackdrop } from '@daria/ui';

const isSidebarOpened = ref(false);
</script>

<template>
  <header p-y-3 bg-white flex justify-between items-center>
    <button
      i-mdi-menu
      text-3xl
      aspect-square
      color="hover:context-6"
      md="hidden"
      @click="isSidebarOpened = true"
    />
    <router-link to="/">
      <h1
        text-3xl
        font-bold
        bg="clip-text gradient-to-r"
        text-transparent
        from-violet-6
        to-cyan-5
      >
        Daria-UI
      </h1>
    </router-link>

    <input
      type="search"
      bg-light-6
      p="x-5 y-2"
      rounded-full
      outline="focus:blue-4"
      placeholder="Search"
      aria-label="Search"
      lt-md="hidden"
    />

    <div flex gap-5>
      <a
        href="https://github.com/loicpennequin/daria-ui"
        i-mdi-github
        text-3xl
        aspect-square
        color="hover:context-6"
      />
    </div>
    <DDrawer
      v-model:is-opened="isSidebarOpened"
      md="hidden"
      title="Menu"
      color-scheme="light"
    >
      <DDrawerBackdrop />
      <DDrawerContent w="85%">
        <TheSidebar p-3 />
      </DDrawerContent>
    </DDrawer>
  </header>
</template>
