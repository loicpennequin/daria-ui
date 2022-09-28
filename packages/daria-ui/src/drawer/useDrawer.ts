import { useSafeInject } from '@/utils/composables';
import type { Maybe } from '@/utils/types';
import type { Ref, InjectionKey } from 'vue';

export type DrawerContext = {
  isOpened: Ref<boolean>;
  closable: Ref<boolean>;
  size: Ref<string>;
  colorScheme: Ref<Maybe<string>>;
  title: Ref<Maybe<string>>;

  open(): void;
  close(): void;
  toggle(): void;
};

export const drawerInjectionKey = Symbol(
  'DDrawer'
) as InjectionKey<DrawerContext>;

export type UseDrawerProviderOptions = Pick<
  DrawerContext,
  'isOpened' | 'closable' | 'colorScheme' | 'title' | 'size'
>;
export const useDrawerProvider = ({
  isOpened,
  closable,
  colorScheme,
  title,
  size
}: UseDrawerProviderOptions) => {
  const api: DrawerContext = {
    isOpened,
    closable,
    colorScheme,
    title,
    size,

    open() {
      isOpened.value = true;
    },
    close() {
      isOpened.value = false;
    },
    toggle() {
      isOpened.value = !isOpened.value;
    }
  };

  provide(drawerInjectionKey, api);

  return api;
};

export const useDrawer = () => useSafeInject(drawerInjectionKey);
