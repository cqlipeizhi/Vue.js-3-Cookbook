import { createApp } from 'vue'
import App from './App.vue'
import StorageManipulatorPlugin from './plugin/storageManipulator'

createApp(App).use(StorageManipulatorPlugin).mount('#app')
