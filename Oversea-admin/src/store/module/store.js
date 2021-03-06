import { getLoggedinUser } from "../../partials/auth";
const user = getLoggedinUser();



export const state = {
    
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
    reg_error: null,
    registeredUser: null,
    paginate:{
        paginate :1,
        pageName:'',
    }
};

export const getters = {
    isLoading(state) {
        return state.loading;
    },
    isLoggedin(state) {
        return state.isLoggedin;
    },
    currentUser(state) {
        return state.currentUser;
    },
    authError(state) {
        return state.auth_error;
    },
    regError(state) {
        return state.reg_error;
    }, 
    registeredUser(state) {
        return state.registeredUser;
    },
    token(state){
      
        if(state.currentUser && state.currentUser.token)
        {
            return state.currentUser.token;
        }
        return false;
    },
    page(state){
        return state.paginate;
    }
};


export const mutations = {
    login(state) {
        state.loading = true;
        state.auth_error = null;
    },
    loginSuccess(state, payload) {
        state.auth_error = null;
        state.isLoggedin = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, { token: payload.access_token });
        localStorage.setItem("adminUser", JSON.stringify(state.currentUser));
    },
    loginFailed(state, payload) {
        state.loading = false;
        state.auth_error = payload.error;
    },
    logout(state) {
        localStorage.removeItem("adminUser");
        state.isLoggedin = false;
        state.currentUser = null;
    },
    registerSuccess(state, payload) {
        state.reg_error = null;
        state.registeredUser = payload.user;
    },
    registerFailed(state, payload) {
        state.reg_error = payload.error;
    },
    page(state,payload){
        state.paginate = payload
    }

}

export const actions = {
    login(context) {
        context.commit("login");
    },
   
}



export default {
    state,
    getters,
    mutations,
    actions
    
}