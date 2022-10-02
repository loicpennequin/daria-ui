import '@unocss/reset/tailwind.css';
import 'uno.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { dariaUiPlugin } from '../src/plugin';

const app = createApp(App);
app.use(createPinia());
app.use(dariaUiPlugin);

app.mount('#app');
