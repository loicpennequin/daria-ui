<script setup lang="ts">
import { useSlotProps } from '@/utils/composables';
import { useToast } from './useToast';

const toastCtx = useToast();
const { toasts, clear } = toastCtx;
const slotProps = useSlotProps(toastCtx);
</script>

<template>
  <div fixed z-10 bottom-10 w-full flex flex-col gap-5 items-center>
    <transition-group
      move-class="transition-all duration-300"
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-300"
      enter-from-class="translate-y-1/2 opacity-0"
      leave-to-class="translate-y-1/2 opacity-0"
      appear
    >
      <slot v-for="toast in toasts" :key="toast.id" v-bind="slotProps">
        <DToast
          :color-scheme="toast.colorScheme"
          :icon="toast.icon"
          is-opened
          w-30rem
          @update:is-opened="clear(toast.id)"
        >
          <strong>{{ toast.title }}</strong>
          <div min-h-1rem>
            {{ toast.text }}
          </div>
        </DToast>
      </slot>
    </transition-group>
  </div>
</template>
