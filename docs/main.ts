import '@unocss/reset/tailwind.css';
import 'uno.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

import App from './App.vue';
import { dariaUiPlugin } from '@/plugin';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(dariaUiPlugin);

app.mount('#app');
