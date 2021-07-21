import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    username: null,
    name: null,
    role: "",
  },

  mutations: {
    setIsLoggedIn(state,isLoggedIn){
      this.state.isLoggedIn = isLoggedIn;
    }, setIsUserName(state,UserName){

      this.state.username = UserName;

    }, setName(state,Name){

      this.state.name = Name;

    }, setRole(state,role){

      this.state.role = role;
    }
  },
  actions: {
    setLoggedIUser({commit,state}, payload){
       commit("setIsLoggedIn",payload.isLoggedIn);
       commit("setUserName",payload.username)
      commit("setName",payload.name)
      commit("setRole",payload.role)

      state.isLoggedIn = payload.isLoggedIn;

      state.username = payload.isLoggedIn;
      state.name = payload.isLoggedIn;
      state.role = payload.isLoggedIn;
    },
    clearUser({commit}){
      commit("setIsLoggedIn",false)
      commit("setUserName",null)
      commit("setName",null)
      commit("setRole","")
    },
  },
  modules: {

  },
});
