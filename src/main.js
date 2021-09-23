import { createApp } from 'vue';
import App from './App';
import router from './router';
import './assets/tailwind.css'


const app = createApp(App);
console.log(app);
app.use(router);
app.mount('#app');

