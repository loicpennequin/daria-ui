import type { Preset, RuleContext } from '@unocss/core';
import type { Theme } from '@unocss/preset-uno';
import { parseColor } from '@unocss/preset-mini/utils';
import { readableColor } from 'polished';

export const presetDaria = (): Preset => ({
  name: 'uno-preset-daria',
  theme: {
    colors: {
      context: {
        1: 'rgba(var(--daria-c-context-1),%alpha)',
        2: 'rgba(var(--daria-c-context-2),%alpha)',
        3: 'rgba(var(--daria-c-context-3),%alpha)',
        4: 'rgba(var(--daria-c-context-4),%alpha)',
        5: 'rgba(var(--daria-c-context-5),%alpha)',
        6: 'rgba(var(--daria-c-context-6),%alpha)',
        7: 'rgba(var(--daria-c-context-7),%alpha)',
        8: 'rgba(var(--daria-c-context-8),%alpha)',
        9: 'rgba(var(--daria-c-context-9),%alpha)'
      },
      contextReadable: {
        1: 'rgba(var(--daria-c-context-readable-1),%alpha)',
        2: 'rgba(var(--daria-c-context-readable-2),%alpha)',
        3: 'rgba(var(--daria-c-context-readable-3),%alpha)',
        4: 'rgba(var(--daria-c-context-readable-4),%alpha)',
        5: 'rgba(var(--daria-c-context-readable-5),%alpha)',
        6: 'rgba(var(--daria-c-context-readable-6),%alpha)',
        7: 'rgba(var(--daria-c-context-readable-7),%alpha)',
        8: 'rgba(var(--daria-c-context-readable-8),%alpha)',
        9: 'rgba(var(--daria-c-context-readable-9),%alpha)'
      }
    }
  },
  rules: [
    [
      /^(?:color-scheme|cs)-(.*)$/,
      ([, body]: string[], { theme }: RuleContext<Theme>) => {
        if (!theme.colors || !theme.colors?.[body]) return {};

        const colors = Array.from({ length: 9 }, (_, index) => {
          // @ts-ignore
          const rawColor = theme.colors[body][index + 1];
          const rawA11yColor = readableColor(rawColor, '#000', '#fff');

          const color = parseColor(rawColor, theme);
          const a11y = parseColor(rawA11yColor, theme);
          return [
            [
              `--daria-c-context-${index + 1}`,
              `${color?.cssColor?.components?.join?.(',')}`
            ],
            [
              `--daria-c-context-readable-${index + 1}`,
              `${a11y?.cssColor?.components?.join?.(',')}`
            ]
          ];
        }).flat();

        return Object.fromEntries(colors);
      }
    ]
  ]
});
