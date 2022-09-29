<template>
  <div
    grid
    grid-cols="1"
    grid-rows="[auto_minmax(0,1fr)]"
    p-x="5 md-8"
    min-h-screen
  >
    <div max-w-screen-xl m-x-auto sticky z-1 top-0 w-full>
      <TheHeader />
    </div>

    <main id="main" m-x="-5 md:-8">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  --at-apply: 'bg-white dark:bg-dark-3 color-black dark:color-white';
}
</style>
