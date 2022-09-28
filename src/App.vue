<template>
  <div grid grid-cols="$cols" style="--cols: auto minmax(0, 1fr)">
    <header col-span-full>
      <h1>Daria-UI</h1>
    </header>

    <nav min-w-12rem>
      <ul>
        <li>Button</li>
      </ul>
    </nav>

    <main><router-view /></main>
  </div>
</template>
