import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import { IonicVue } from '@ionic/vue';

// Ionic core CSS
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/display.css';

// Theme
import './theme/variables.css';
import './theme/global.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(createPinia());

router.isReady().then(() => {
  app.mount('#app');
});
