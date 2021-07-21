import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../components/Login";
import Signup from "../components/Signup";
// import UserStat from "../components/UserStat";
// import Summary from "../components/Summary";
import Home from "../components/Home";
import Create from "../components/Create";
import VueClock from '@dangvanthanh/vue-clock';
import store from "@/store";



Vue.use(VueClock);

Vue.use(VueRouter);

const routes = [

  // {
  //   // path: "/",
  //   // name: "Home",
  //   // component: Home,

  {
    path: "/",// go to login page with this path
    name: "Login",
    component: Login
  },
  {
    path: "/signup",// go to signup page with this path
    name: "Signup",
    component: Signup
  },
  // {
  //   path: "/stat",
  //   name: "Stat",
  //   component: UserStat
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/home",
    name: "Home",
    component: Home
    // component: () =>
    //     import( "/Home.vue"),

  },
  {
    path: "/create",
    name: "Create",
    component: Create
  }
];

const router = new VueRouter({
  routes,
});
//setup beforeEach hook to check the logged in sync the loggin states with backend

router.beforeEach(async (to, from, next) => {
//get login state using whomai and axios

  let response = await Vue.axios.get("/api/whoami"); // go backend then let become data from backend
  // response.data is ore payload
  // get the logged in state directly from the response
await store.dispatch("setLoggedIUser",response.data);
  let isLoggedIn = store.state.isLoggedIn;

  console.log(isLoggedIn);// show console on website that login state is false or not
  console.log(store.state.username)

  // make sure that user is logged, user will not be able to ee login page
  if (to.name== "Login"&& isLoggedIn){

    next({name:"Home"});
  }
  // if the name of the router is not Login, it needs authorization to access
  if (to.name !== 'Login'&& !isLoggedIn) {// name refers to name:, path:
    // redirect to login page
    next({name: 'Login'});

  }
  else {
    // otherwise letgo
    next();
  }
})

export default router;
