import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

// import tailwind //
import './assets/css/tailwind.css';

// create the app instance //
const app = createApp(App);

// declare the store and router //
app.use(store);
app.use(router);

// register components globally //

// main mount //
app.mount('#app');