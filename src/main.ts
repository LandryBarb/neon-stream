import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// "app.use" installs plugins. We are installing the router.
app.use(router)

app.mount('#app')