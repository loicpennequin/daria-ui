import '@unocss/reset/tailwind.css';
import { createApp } from 'vue';
import 'uno.css';
import App from './App.vue';
import { dariaUiPlugin } from '@daria/ui';

const app = createApp(App);
app.use(dariaUiPlugin);

app.mount('#app');
