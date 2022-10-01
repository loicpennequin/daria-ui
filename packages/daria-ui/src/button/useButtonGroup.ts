import type { Ref, InjectionKey } from 'vue';
import type { ButtonVariant } from './types';

export type ButtonGroupContext = {
  variant: Ref<ButtonVariant | undefined>;
};

export const buttonGroupInjectionKey = Symbol(
  'DButtonGroup'
) as InjectionKey<ButtonGroupContext>;

export type UseButtonGroupProviderOptions = ButtonGroupContext;

export const useButtonGroupProvider = ({
  variant
}: UseButtonGroupProviderOptions) => {
  const api: ButtonGroupContext = {
    variant
  };

  provide(buttonGroupInjectionKey, api);

  return api;
};

export const useButtonGroup = () =>
  inject(buttonGroupInjectionKey, {
    variant: ref(undefined)
  });
