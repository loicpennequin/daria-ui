<template>
  <PageLayout title="Installation">
    <ol space-y-4>
      <li>
        1- Install the library and it's peer dependencies
        <code p-3 bg-gray-2 max-w="full" font-mono rounded-lg block>
          yarn add @daria/ui @vueuse/core @headlessui/vue @unocss/runtime
          @unocss/preset-attributify @unocss/preset-uno
        </code>
      </li>

      <li>
        2- Add the UnoCSS vite plugin to your configuration.
        <pre>
          <code p-3 bg-gray-2 max-w="full" font-mono rounded-lg block>import presetAttributify from '@unocss/preset-attributify'; 
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import Unocss from '@unocss/vite';
import presetDaria from '@daria/ui/dist/uno-preset';

export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons(),
        presetDaria()
      ]
    })
  ],
          </code>
        </pre>
      </li>
      <li>
        3- Add the DariaUI CSS file at the root of your application
        <code p-3 bg-gray-2 max-w="full" font-mono rounded-lg block>
          import 'uno.css' // Don't forget to import the uno.css file to ger
          your own uno-generated CSS ! import '@daria/ui/dist/style.css';
        </code>
      </li>
      <li>
        4- Add the vue plugin. This will add the UnoCSS runtime.
        <pre>
          <code p-3 bg-gray-2 max-w="full" font-mono rounded-lg block>import { createApp } from 'vue'
import { createDariaUi } from '@daria/ui'; 

const app = createApp();
app.use(createDariaUi())</code>
        </pre>
      </li>
    </ol>
  </PageLayout>
</template>
