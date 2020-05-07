import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Home from "../view/Home";
import NotFound from "../view/NotFound";
import Login from "../view/Login";

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})