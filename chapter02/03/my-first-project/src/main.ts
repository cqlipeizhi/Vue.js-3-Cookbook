import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import './classComponentsHooks/vue-router'

createApp(App).use(store).use(router).mount('#app')
