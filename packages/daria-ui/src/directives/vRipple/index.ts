import './style.css';
import type { Directive } from 'vue';

const RIPPLE_COLORS: Record<string, string> = {
  dark: '#000',
  light: '#fff'
} as const;

type RippleColor = keyof typeof RIPPLE_COLORS;

const handleRipple = (
  el: HTMLElement,
  options: { x: number; y: number; color: RippleColor }
) => {
  const { left, top, width, height } = el.getBoundingClientRect();
  const position = {
    x: options.x - left,
    y: options.y - top
  };
  const maxScale = Math.sqrt(width ** 2 + height ** 2) * 2;

  el.style.setProperty('--ripple-position-x', `${position.x}px`);
  el.style.setProperty('--ripple-position-y', `${position.y}px`);
  el.style.setProperty('--ripple-color', RIPPLE_COLORS[options.color]);
  el.setAttribute('data-ripple', '');

  requestAnimationFrame(() => {
    el.style.setProperty('--ripple-scale', `${maxScale} ${maxScale}`);
    el.style.setProperty('--ripple-opacity', `0`);

    el.addEventListener('transitionend', () => {
      el.removeAttribute('data-ripple');
      el.style.removeProperty('--ripple-scale');
      el.style.removeProperty('--ripple-opacity');
    });
  });
};

const listeners = new WeakMap();
export const vRipple: Directive = {
  mounted: (el: HTMLElement, binding) => {
    const listener = (e: MouseEvent) =>
      handleRipple(el, {
        x: e.clientX,
        y: e.clientY,
        color: (binding.arg as RippleColor) ?? 'light'
      });

    listeners.set(el, listener);
    el.addEventListener('click', listener);
  },

  updated: (el: HTMLElement, binding) => {
    if (listeners.has(el)) {
      el.removeEventListener('click', listeners.get(el));
    }

    if (binding.value) {
      el.addEventListener('click', listeners.get(el));
    }
  }
};
