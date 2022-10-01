import { useSafeInject } from '@/utils/composables';
import type { Maybe } from '@/utils/types';
import type { Ref, InjectionKey } from 'vue';

export type DrawerContext = {
  isOpened: Ref<boolean>;
  closable: Ref<boolean>;
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
  'isOpened' | 'closable' | 'colorScheme' | 'title'
>;
export const useDrawerProvider = ({
  isOpened,
  closable,
  colorScheme,
  title
}: UseDrawerProviderOptions) => {
  const api: DrawerContext = {
    isOpened,
    closable,
    colorScheme,
    title,

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
