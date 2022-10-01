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

    <DDrawer v-model:is-opened="isOpened" cs-light title="My Cool Drawer">
      <DDrawerBackdrop />
      <DDrawerContent>
        <p text-xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi
          iure distinctio nesciunt! Quis dolores delectus fugit dolorem aut fuga
          veritatis accusantium magnam exercitationem architecto odio, minima
          totam natus nam?
        </p>
        <p text-xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi
          iure distinctio nesciunt! Quis dolores delectus fugit dolorem aut fuga
          veritatis accusantium magnam exercitationem architecto odio, minima
          totam natus nam?
        </p>

        <p text-xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi
          iure distinctio nesciunt! Quis dolores delectus fugit dolorem aut fuga
          veritatis accusantium magnam exercitationem architecto odio, minima
          totam natus nam?
        </p>

        <p text-xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi
          iure distinctio nesciunt! Quis dolores delectus fugit dolorem aut fuga
          veritatis accusantium magnam exercitationem architecto odio, minima
          totam natus nam?
        </p>

        <p text-xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi
          iure distinctio nesciunt! Quis dolores delectus fugit dolorem aut fuga
          veritatis accusantium magnam exercitationem architecto odio, minima
          totam natus nam?
        </p>

        <p text-xl>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi
          iure distinctio nesciunt! Quis dolores delectus fugit dolorem aut fuga
          veritatis accusantium magnam exercitationem architecto odio, minima
          totam natus nam?
        </p>

        <template #footer>
          <DSurface>Cool drawer footer</DSurface>
        </template>
      </DDrawerContent>
    </DDrawer>
  </DSurface>
</template>
