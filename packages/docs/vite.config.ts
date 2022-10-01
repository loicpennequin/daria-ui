import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import Unocss from '@unocss/vite';
import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import presetWebFonts from '@unocss/preset-web-fonts';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Markdown from 'vite-plugin-md';
import code from '@yankeeinlondon/code-builder';
import link from '@yankeeinlondon/link-builder';
import meta from '@yankeeinlondon/meta-builder';
import transformerDirective from '@unocss/transformer-directives';
//@ts-ignore
import { presetDaria } from '@dariajs/ui/preset';
//@ts-ignore
import { dariaUiResolver } from '@dariajs/ui/resolver';

const codeBlockTheme = {
  foreground: '#fd9170',
  background: '#363636',

  lineNumber: ['#636363', '#888888'],
  lineNumberGutter: ['#BEBEBE', '#eeeeee'],
  highlight: ['#474747', '#444444'],
  textSelection: ['#656565', '#787878'],

  comment: ['hsl(0, 0%, 50%)', 'hsl(0, 0%, 65%)'],
  prolog: ['hsl(0, 0%, 50%)', 'hsl(0, 0%, 65%)'],
  doctype: ['hsl(0, 0%, 50%)', 'hsl(0, 0%, 65%)'],
  cdata: ['hsl(0, 0%, 50%)', 'hsl(0, 0%, 65%)'],
  punctuation: ['hsl(8, 8%, 55%)', 'hsl(8, 8%, 68%)'],

  // punctuation: '/70',
  // namespace: '/70',

  tag: ['hsl(14, 58%, 55%)', 'hsl(14, 58%, 75%)'],
  boolean: ['hsl(14, 58%, 55%)', 'hsl(14, 58%, 75%)'],
  number: ['hsl(14, 58%, 55%)', 'hsl(14, 58%, 75%)'],
  deleted: ['hsl(6, 58%, 55%)', 'hsl(6, 58%, 75%)'],

  keyword: ['hsl(53, 89%, 79%)', 'hsl(53, 89%, 85%)'],
  property: ['hsl(53, 89%, 79%)', 'hsl(53, 89%, 85%)'],
  selector: ['hsl(53, 89%, 79%)', 'hsl(53, 89%, 85%)'],
  constant: ['hsl(53, 89%, 79%)', 'hsl(53, 89%, 85%)'],
  symbol: ['hsl(53, 89%, 79%)', 'hsl(53, 89%, 85%)'],
  builtin: ['hsl(53, 89%, 79%)', 'hsl(53, 89%, 85%)'],

  attrName: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  attrValue: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  string: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  char: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  operator: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  entity: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  url: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  variable: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],
  inserted: ['hsl(76, 21%, 52%)', 'hsl(76, 21%, 64%)'],

  atrule: ['hsl(218, 50%, 55%)', 'hsl(218, 50%, 68%)'],
  regex: ['hsl(42, 75%, 65%)', 'hsl(42, 75%, 75%)'],
  important: ['hsl(42, 75%, 65%)', 'hsl(42, 75%, 75%)'],
  markupTag: ['hsl(33, 33%, 52%)', 'hsl(33, 33%, 72%)'],
  markupAttrName: ['hsl(33, 33%, 52%)', 'hsl(33, 33%, 72%)'],
  markupPunctuation: ['hsl(33, 33%, 52%)', 'hsl(33, 33%, 72%)']
};
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // <--
    }),
    Pages({ extensions: ['vue', 'md'] }),
    Markdown({
      headEnabled: true,
      builders: [
        code({
          theme: codeBlockTheme
        }),
        link(),
        meta()
      ],
      markdownItSetup(md) {
        md.use(require('markdown-it-anchor'));
        md.use(require('markdown-it-table-of-contents'));
      }
    }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue', '@vueuse/core']
    }),
    //waiting for https://github.com/antfu/unplugin-vue-components/issues/503 to be solved
    // Components({
    //   dirs: ['src'],
    //   extensions: ['vue', 'md'],
    //   include: [/\.vue$/, /\.md$/],
    //   deep: true,
    //   resolvers: [dariaUiResolver()]
    // }),
    Unocss({
      transformers: [transformerDirective()],
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
        presetDaria(),
        presetWebFonts({
          fonts: {
            sans: 'Roboto'
          }
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
