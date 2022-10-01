<script setup lang="ts">
import { useColorScheme } from '@/utils/composables';
import type { Size } from '@/utils/types';
import { TransitionRoot, Dialog } from '@headlessui/vue';
import { useDrawerProvider } from './useDrawer';

type Props = {
  isOpened: boolean;
  closable?: boolean;
  title?: string;
};

const props = withDefaults(defineProps<Props>(), {
  closable: true,
  size: 'md'
});
const emit = defineEmits<{ (e: 'update:isOpened', val: boolean): void }>();

const vModel = useVModel(props, 'isOpened', emit);

const containerEl = ref<HTMLElement>();
onMounted(() => {
  console.log('mounted', containerEl.value);
});
const colorScheme = useColorScheme(containerEl);

watchEffect(() => {
  console.log('color scheme', colorScheme.value);
});

useDrawerProvider({
  isOpened: vModel,
  closable: toRef(props, 'closable'),
  colorScheme: colorScheme,
  title: toRef(props, 'title')
});
</script>

<template>
  <TransitionRoot appear :show="vModel" as="template">
    <Dialog as="div" relative z-10 :static="!closable" @close="vModel = false">
      <div
        ref="containerEl"
        fixed
        inset-0
        overflow-y-auto
        grid
        un-children="col-start-1 row-star-1"
        :color-scheme="colorScheme"
      >
        <slot />
      </div>
    </Dialog>
  </TransitionRoot>
</template>
