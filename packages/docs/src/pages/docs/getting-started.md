---
title: 'Getting Started | Daria-UI'
---
# Installation

Setting up Daria-UI requires a few steps. Is may be a bit more involved than what you're used to, but we avoid setting everything up ourselves to allow you fine grained control no how you wish to use Daria UI and UnoCSS.

1 - Install the library and it's peer dependencies

```bash
yarn add @dariajs/ui @unocss/runtime @unocss/preset-attributify @unocss/preset-uno @unocss/preset-icons
```

2 - Add the UnoCSS vite plugin to your configuration.

```ts
import presetAttributify from '@unocss/preset-attributify'; 
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';
import Unocss from '@unocss/vite';
import presetDaria from '@dariajs/ui/dist/uno-preset';

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
  ]
})
```

2b - (Optional) If you are using unplugin-vue-components, Add the dariaUiResolver to have your Daria UI Component auto imported

```ts
import { dariaUiResolver } from '@dariajs/ui/resolver';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    Components({
      resolvers: [dariaUiResolver()]
    }),
  ]
})

```

3 -  Add the DariaUI CSS file at the root of your application

```ts
import 'uno.css' // Don't forget to import the uno.css file to get your own uno-generated CSS ! 
import '@dariajs/ui/dist/style.css';
```

4 - Add the vue plugin. This will add the UnoCSS runtime.

```ts
import { createApp } from 'vue'
import { createDariaUi } from '@dariajs/ui'; 

const app = createApp();
app.use(createDariaUi())
```
