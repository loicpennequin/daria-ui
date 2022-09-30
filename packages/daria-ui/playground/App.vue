<script setup lang="ts">
import '@/unplugin-resolver';
const isOpened = ref(false);
const isDark = useDark();
const toggleDark = () => {
  isDark.value = !isDark.value;
};
</script>

<template>
  <DSurface cs="dark dark:red" p-10 min-h-screen>
    <div flex gap-4 items-center>
      <DButton cs-yellow @click="isOpened = true">Open Drawer</DButton>
      <DIconButton text-2xl title="toggle dark mode" @click="toggleDark">
        <span :i="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" />
      </DIconButton>
    </div>

    <DDrawer v-model:is-opened="isOpened" cs-dark title="My Cool Drawer">
      <DDrawerBackdrop />
      <DDrawerContent>
        <div p-5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad
            iste earum beatae, itaque, maiores laborum ipsa error harum iure
            illo architecto illum mollitia, nihil commodi voluptate voluptates
            provident nostrum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad
            iste earum beatae, itaque, maiores laborum ipsa error harum iure
            illo architecto illum mollitia, nihil commodi voluptate voluptates
            provident nostrum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad
            iste earum beatae, itaque, maiores laborum ipsa error harum iure
            illo architecto illum mollitia, nihil commodi voluptate voluptates
            provident nostrum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad
            iste earum beatae, itaque, maiores laborum ipsa error harum iure
            illo architecto illum mollitia, nihil commodi voluptate voluptates
            provident nostrum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad
            iste earum beatae, itaque, maiores laborum ipsa error harum iure
            illo architecto illum mollitia, nihil commodi voluptate voluptates
            provident nostrum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad
            iste earum beatae, itaque, maiores laborum ipsa error harum iure
            illo architecto illum mollitia, nihil commodi voluptate voluptates
            provident nostrum.
          </p>
        </div>
        <template #footer>My Cool drawer footer</template>
      </DDrawerContent>
    </DDrawer>
  </DSurface>
</template>
