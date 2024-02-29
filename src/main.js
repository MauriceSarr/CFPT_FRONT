import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; //vuex store
import router from './router.js' //vuex router;
import axios from "axios";

/* import Header from './components/layout/header.vue';
import Navbar from './components/layout/navbar.vue';
import Footer from './components/layout/footer.vue';  */

axios.defaults.withCredentials= true
const app = createApp(App)

/* app.component('app-navbar', Navbar);
app.component('app-footer', Footer);  */ 

app.use(store)
app.use(router)

app.mount('#app')

