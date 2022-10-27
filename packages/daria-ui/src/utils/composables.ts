import type { VueInstance } from '@vueuse/core';
import type { InjectionKey, Ref } from 'vue';
import { getColorScheme } from './dom';
import type { Maybe } from './types';

export const useSafeInject = <T>(injectionKey: InjectionKey<T>): T => {
  const context = inject<T>(injectionKey);

  if (context === undefined) {
    throw new Error(
      `Your are trying to use ${injectionKey.toString()} outside of its provider.`
    );
  }

  return context;
};

export const useColorScheme = (el: Ref<Maybe<HTMLElement | VueInstance>>) => {
  const cs = ref<string>();

  const setColorScheme = () => {
    const node = unrefElement(el);
    if (!node) return;
    cs.value = getColorScheme(node);
  };

  useMutationObserver(el, setColorScheme, {
    attributes: true
  });
  onMounted(setColorScheme);
  watch(el, setColorScheme);

  return cs;
};

// converts an object containing refs to a flat, reactive object
// used when passing props to a slot, for convenience (the consumer doesn't need to use .value in the template)
export const useSlotProps = <T extends Record<string, any>>(obj: T) =>
  reactive(obj);
