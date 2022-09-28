<template>
  <div
    grid
    grid-cols="[auto_minmax(0,1fr)]"
    grid-rows="[auto_minmax(0,1fr)]"
    max-w-screen-xl
    m-x-auto
    p-x="5 md-8"
    bg-white
    min-h-screen
  >
    <TheHeader sticky top-0 col-span-full />
    <aside lt-md="hidden">
      <a href="#main" sr-only focus-visible="not-sr-only">Skip to content</a>
      <TheSidebar sticky top-16 />
    </aside>
    <main id="main" col-span="lt-md:full"><router-view /></main>
  </div>
</template>
