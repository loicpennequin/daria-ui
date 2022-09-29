<script setup lang="ts">
const isOpened = ref(false);
</script>

<template>
  <div cs-dark>
    <DButton @click="isOpened = true">Open Drawer</DButton>

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
        </div>
        <template #footer>My Cool drawer footer</template>
      </DDrawerContent>
    </DDrawer>
  </div>
</template>
