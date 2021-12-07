import axios from 'axios';
import store from '../store';
import router from '../router';
import alertService from '../services/AlertService';
const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {'Authorization': `Bearer ${store.getters.token}`}
});
api.interceptors.request.use(function(config) {
    if (store.getters.token) {
        config.headers.common = { 'Authorization': `Bearer ${store.getters.token}` }
    }
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status === 406){
        if(store.getters.currentUser != null) {
            store.commit('logout');
            router.push({path:"/"});
            alertService.showInfoDialog(null,'長時間操作がなかったため、ログアウトしました。');
        }      
    }
    else {
        return Promise.reject(error);
    }
});

export default api;