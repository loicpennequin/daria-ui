<template>
  <div
    grid
    grid-cols="[auto_minmax(0,1fr)]"
    grid-rows="[auto_minmax(0,1fr)]"
    max-w-screen-xl
    m-x-auto
    p-x="5 md-8"
    min-h-screen
  >
    <TheHeader sticky z-1 top-0 col-span-full />
    <aside lt-md="hidden">
      <a href="#main" sr-only focus-visible="not-sr-only">Skip to content</a>
      <TheSidebar sticky top-16 />
    </aside>
    <main id="main" col-span="lt-md:full">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  --at-apply: 'bg-white dark:bg-dark-2 color-black dark:color-white';
}
</style>
