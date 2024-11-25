import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import nav_filter from "./components/nav_filter.vue";

const app = createApp(App);

app.component('nav-filter', nav_filter)
app.use(router).mount('#app')
