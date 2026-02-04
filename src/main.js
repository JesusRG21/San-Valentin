import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'



/* BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/* STYLES */
import './assets/scss/main.scss'

/* FONTS */
import './assets/fonts/stylesheet.css'

const app = createApp(App)

app.use(router)

app.mount('#app')