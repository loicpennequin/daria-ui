import { defineStore, storeToRefs } from 'pinia';
import type { PartialBy } from '@/utils/types';

export type Toast = {
  id: number;
  title: string;
  text?: string;
  colorScheme: string;
  icon: string;
  timeout: number;
};
export type ToastInput = Omit<PartialBy<Toast, 'timeout'>, 'id'>;
export type ToastHelperInput = PartialBy<ToastInput, 'colorScheme' | 'icon'>;

const DEFAULT_TIMEOUT = 5000;
let idCount = 1;

export const useToastStore = defineStore('Daria-UI:toast', () => {
  const api = {
    toasts: ref<Toast[]>([]),

    add(input: ToastInput) {
      const id = idCount++;
      api.toasts.value.push({
        timeout: DEFAULT_TIMEOUT,
        id,
        ...input
      });

      setTimeout(() => {
        api.clear(id);
      }, input.timeout ?? DEFAULT_TIMEOUT);
    },

    clear(id: number) {
      const idx = api.toasts.value.findIndex(t => t.id === id);
      if (idx === -1) return;

      api.toasts.value.splice(idx, 1);
    },

    clearAll() {
      api.toasts.value = [];
    }
  };

  return api;
});

export const useToast = () => {
  const toastStore = useToastStore();
  const { toasts } = storeToRefs(toastStore);

  const addToastHelper =
    (colorScheme: string, icon: string) => (toast: ToastHelperInput) => {
      toastStore.add({
        colorScheme,
        icon,
        ...toast
      });
    };

  return {
    toasts,
    clear: toastStore.clear,
    clearAll: toastStore.clearAll,
    show: toastStore.add,
    showError: addToastHelper('red', 'mdi-close'),
    showWarning: addToastHelper('orange', 'mdi-alert-outline'),
    showSuccess: addToastHelper('green', 'check'),
    showInfo: addToastHelper('blue', 'mdi-information-outline')
  };
};
