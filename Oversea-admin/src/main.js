import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from '../src/api/apiBasePath';
window.$ = require('jquery')
window.JQuery = require('jquery')
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/zh-cn';
import VueI18n from 'vue-i18n';
import English from '../src/lang/en';
import 日本語 from './lang/jp';
import DataTable from '../src/components/DataTable/DataTable';
import Vuelidate from 'vuelidate';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetAlert from 'vue-sweetalert2';
import VueScrollTo from 'vue-scrollto';
import configs from './config';
import VueFilter from 'vue-filter';
import alertService from './services/AlertService';
import modal from './components/model/modelComponent';
import io from 'socket.io-client';
import VueChatScroll from 'vue-chat-scroll';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('DataTable', DataTable);
Vue.component('v-select', vSelect)
Vue.use(require('vue-moment'));
Vue.use(VueFilter);
Vue.use(Vuelidate);
Vue.use(DatePicker);
Vue.use(VueSweetAlert);
Vue.use(VueScrollTo);
Vue.use(api)

Vue.prototype.$api = api
Vue.prototype.$configs = configs;
Vue.config.productionTip = false;
Vue.prototype.$alertService = alertService;

// --socket.io client init
window.io = io;
window.socket = io(process.env.VUE_APP_SOCKET_URL);
Vue.use(VueChatScroll);

Vue.use(Loading, {
	color: '#0062ff',
	loader: process.env.VUE_APP_LOADING_INDICATOR ?? 'dots',
	backgroundColor: '#ffffff',
	width: 30,
	height: 30,
    opacity: 0.9,
    fontSize: 12,
},{
	after: (new Vue()).$createElement('p', {class: 'loading-text'}, ['送信中'])
});

const languages = {
    English: English,
    日本語: 日本語,
}

Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: '日本語',
    messages: languages,
})

Vue.component('modal', modal, {
	template: '#modal-template',
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");



