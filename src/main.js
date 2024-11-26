import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import nav_filter from "./components/nav_filter.vue";
import footer_compo from "./components/footer_compo.vue"

const app = createApp(App);
const pinia = createPinia();

app.component('nav-filter', nav_filter);
app.component('footer-component', footer_compo);

app.use(pinia);
app.use(router).mount('#app')
