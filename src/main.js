import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Icon } from '@iconify/vue';

import App from './App.vue';
import router from './router';
import nav_filter from "./components/nav_filter.vue";
import footer_compo from "./components/footer_compo.vue";
import searchBtn from './components/searchBtn.vue';

const app = createApp(App);
const pinia = createPinia();

app.component('nav-filter', nav_filter);
app.component('footer-component', footer_compo);
app.component('search-btn', searchBtn);
app.component('iconify-icon', Icon)

app.use(pinia);
app.use(router).mount('#app')
