import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Icon } from '@iconify/vue';

import App from './App.vue';
import router from './router';
import nav_filter from "./components/HomeComponent/nav_filter.vue";
import searchBtn from './components/HomeComponent/searchBtn.vue';

const app = createApp(App);
const pinia = createPinia();

app.component('nav-filter', nav_filter);
app.component('search-btn', searchBtn);
app.component('iconify-icon', Icon)

app.use(pinia);
app.use(router).mount('#app')
