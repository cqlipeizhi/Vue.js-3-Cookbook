import { createApp } from 'vue'
import App from './App.vue'
import InputMaskDirective from './directives/formMaskInputDirective'

const app=createApp(App)
app.directive('input-mask',InputMaskDirective)
app.mount('#app')
