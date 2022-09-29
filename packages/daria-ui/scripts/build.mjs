import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const format = (fileName, ext) =>
  ext === 'cjs' ? `${fileName}.cjs` : `${fileName}.mjs`;

const libraries = [
  {
    entry: path.resolve(__dirname, '../src/index.ts'),
    fileName: ext => format('daria-ui', ext)
  },
  {
    entry: path.resolve(__dirname, '../src/unocss.ts'),
    fileName: ext => format('uno-preset-daria', ext)
  },
  {
    entry: path.resolve(__dirname, '../src/unplugin-resolver.ts'),
    fileName: ext => format('resolver', ext)
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
