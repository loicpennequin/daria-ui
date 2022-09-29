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
import { presetDaria } from '@daria/ui/preset';
import { dariaUiResolver } from '@daria/ui/resolver';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/] // <--
    }),
    Markdown({
      headEnabled: true,
      builders: [
        code({
          languageGrammars: ['js', 'ts', 'vue', 'bash'],
          theme: 'base'
        }),
        link(),
        meta()
      ]
    }),
    Pages({ dirs: ['src/pages'], extensions: ['vue', 'md'] }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', '@vueuse/core']
    }),
    Components({
      dirs: ['src'],
      extensions: ['vue'],
      deep: true,
      resolvers: [dariaUiResolver()]
    }),
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
