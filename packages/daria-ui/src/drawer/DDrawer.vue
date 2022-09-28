<script setup lang="ts">
import type { Size } from '@/utils/types';
import { TransitionRoot, Dialog } from '@headlessui/vue';
import { useDrawerProvider } from './useDrawer';

type Props = {
  isOpened: boolean;
  closable?: boolean;
  colorScheme?: string;
  title?: string;
  size?: Size;
};

const props = withDefaults(defineProps<Props>(), {
  closable: true,
  size: 'md'
});
const emit = defineEmits<{ (e: 'update:isOpened', val: boolean): void }>();

const vModel = useVModel(props, 'isOpened', emit);

useDrawerProvider({
  isOpened: vModel,
  closable: toRef(props, 'closable'),
  colorScheme: toRef(props, 'colorScheme'),
  title: toRef(props, 'title'),
  size: toRef(props, 'size')
});
</script>

<template>
  <TransitionRoot appear :show="vModel" as="template">
    <Dialog as="div" relative z-10 :static="!closable" @close="vModel = false">
      <div
        fixed
        inset-0
        overflow-y-auto
        grid
        un-children="col-start-1 row-star-1"
        :color-scheme="props.colorScheme"
      >
        <slot />
      </div>
    </Dialog>
  </TransitionRoot>
</template>
