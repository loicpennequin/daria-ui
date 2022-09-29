---
title: 'Getting Started | Daria-UI'
---
## Installation

1 - Install the library and it's peer dependencies

```bash
yarn add @daria/ui @vueuse/core @headlessui/vue @unocss/runtime @unocss/preset-attributify @unocss/preset-uno @unocss/preset-icons
```

2 - Add the UnoCSS vite plugin to your configuration.

```ts
import presetAttributify from '@unocss/preset-attributify'; 
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
  ]
})
```

3 -  Add the DariaUI CSS file at the root of your application

```ts
import 'uno.css' // Don't forget to import the uno.css file to get your own uno-generated CSS ! 
import '@daria/ui/dist/style.css';
```

4 - Add the vue plugin. This will add the UnoCSS runtime.

```ts
import { createApp } from 'vue'
import { createDariaUi } from '@daria/ui'; 

const app = createApp();
app.use(createDariaUi())
```
