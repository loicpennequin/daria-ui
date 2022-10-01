export const getColorScheme = (el: HTMLElement | SVGElement) => {
  // console.log(el);
  return window.getComputedStyle(el).getPropertyValue('--daria-cs-scope');
};
