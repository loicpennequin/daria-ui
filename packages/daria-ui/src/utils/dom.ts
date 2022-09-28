import type { Maybe } from './types';

export function getAttributeByRegex(element: HTMLElement, regex: RegExp) {
  for (const attr of element.attributes) {
    if (regex.test(attr.name)) {
      return { key: attr.name, value: attr.value };
    }
    return undefined;
  }
}
