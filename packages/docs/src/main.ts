import '@unocss/reset/tailwind.css';
import '@daria/ui/dist/style.css';
import '@/styles/markdown.css';
import 'uno.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import router from './router';

import App from './App.vue';
import { dariaUiPlugin } from '@daria/ui';

createApp(App)
  .use(createPinia())
  .use(router)
  .use(createHead())
  .use(dariaUiPlugin)

  .mount('#app');
