import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const libraries = [
  {
    entry: path.resolve(__dirname, '../src/index.ts'),
    fileName: ext => `daria-ui.${ext}.js`
  },
  {
    entry: path.resolve(__dirname, '../src/unocss.ts'),
    fileName: ext => `uno-preset-datia.${ext}.js`
  }
];

libraries.forEach(async lib => {
  await build({
    build: {
      outDir: './dist',
      lib: {
        ...lib,
        formats: ['es', 'cjs']
      },
      emptyOutDir: false
    }
  });
});
