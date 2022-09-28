<template>
  <div
    grid
    grid-cols="$cols"
    grid-rows="$rows"
    style="--cols: auto minmax(0, 1fr); --rows: auto 1fr"
    max-w-screen-xl
    m-x-auto
    min-h-screen
    p-x="5 md-8"
  >
    <TheHeader />
    <TheSidebar lt-md="hidden" />
    <main col-span="lt-md:full"><router-view /></main>
  </div>
</template>
