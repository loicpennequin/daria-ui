export const getColorScheme = (el: HTMLElement | SVGElement) => {
  return window.getComputedStyle(el).getPropertyValue('--daria-cs-scope');
};
