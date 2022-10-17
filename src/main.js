import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './assets/main.scss';

import Notifications from '@kyvg/vue3-notification'

createApp(App).use(router).use(bootstrap).use(Notifications).mount('#app')
