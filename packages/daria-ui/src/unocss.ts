import type { Preset, RuleContext } from '@unocss/core';
import type { Theme } from '@unocss/preset-uno';
import { parseColor } from '@unocss/preset-mini/utils';
import { readableColor } from 'polished';

type ColorSwatchEntry = [string | number, string];
type ColorSwatchMapFunction = (
  val: undefined,
  index: number
) => ColorSwatchEntry | ColorSwatchEntry[];
const makeSwatch = (
  fn: ColorSwatchMapFunction,
  { flat }: { flat: boolean } = { flat: false }
) => {
  const entries = Array.from({ length: 9 }, fn);

  const normalizedEntries = flat ? entries.flat() : entries;
  return Object.fromEntries(normalizedEntries as any);
};

export const presetDaria = (): Preset => ({
  name: 'uno-preset-daria',
  theme: {
    colors: {
      context: makeSwatch((_, index) => [
        index + 1,
        `rgba(var(--daria-cs-${index + 1}),%alpha)`
      ]),
      readable: makeSwatch((_, index) => [
        index + 1,
        `rgba(var(--daria-cs-readable-${index + 1}),%alpha)`
      ])
    }
  },
  rules: [
    [
      /^(?:color-scheme|cs)-(.*)$/,
      ([, body]: string[], { theme }: RuleContext<Theme>) => {
        if (!theme.colors || !theme.colors?.[body]) return {};

        return makeSwatch(
          (_, index) => {
            // @ts-ignore
            const rawColor = theme.colors[body][index + 1];
            const rawA11yColor = readableColor(rawColor, '#000', '#fff');

            const color = parseColor(rawColor, theme);
            const a11y = parseColor(rawA11yColor, theme);
            return [
              ['--daria-cs-scope', body],
              [
                `--daria-cs-${index + 1}`,
                `${color?.cssColor?.components?.join?.(',')}`
              ],
              [
                `--daria-cs-readable-${index + 1}`,
                `${a11y?.cssColor?.components?.join?.(',')}`
              ]
            ];
          },
          { flat: true }
        );
      }
    ]
  ]
});
