import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import Unocss from '@unocss/vite';
import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import presetWebFonts from '@unocss/preset-web-fonts';
import { presetDaria } from './src/unocss';
import Pages from 'vite-plugin-pages';
import Components from 'unplugin-vue-components/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    vue(),
    Pages({ dirs: ['docs/pages'] }),
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
      resolvers: [HeadlessUiResolver()],
      dirs: ['src', 'docs'],
      extensions: ['vue'],
      deep: true
    }),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
        presetWebFonts({
          fonts: {
            sans: 'Roboto'
          }
        }),
        presetDaria()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: ext => `daria-ui.${ext}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    },
    target: 'esnext',
    sourcemap: true
  }
});
