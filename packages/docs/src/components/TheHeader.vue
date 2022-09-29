<script setup lang="ts">
import {
  DDrawer,
  DDrawerContent,
  DDrawerBackdrop,
  DIconButton,
  DSurface
} from '@daria/ui';

const isSidebarOpened = ref(false);
const isDark = useDark();
const toggleDark = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <DSurface p="y-3" flex justify-between items-center>
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

    <div flex gap-5 cs="dark dark:light">
      <DIconButton
        is="a"
        text-2xl
        href="https://github.com/loicpennequin/daria-ui"
      >
        <span i-mdi-github />
      </DIconButton>

      <DIconButton text-2xl title="toggle dark mode" @click="toggleDark">
        <span :i="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" />
      </DIconButton>

      <DIconButton
        title="menu"
        md="hidden"
        text-3xl
        @click="isSidebarOpened = true"
      >
        <span i-mdi-menu />
      </DIconButton>
    </div>
    <DDrawer
      v-model:is-opened="isSidebarOpened"
      md="hidden"
      title="Menu"
      color-scheme="light dark:dark"
    >
      <DDrawerBackdrop />
      <DDrawerContent w="85%">
        <TheSidebar p-3 />
      </DDrawerContent>
    </DDrawer>
  </DSurface>
</template>
