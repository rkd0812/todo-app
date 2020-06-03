import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../view/Home";
import NotFound from "../view/NotFound";
import Login from "../view/Login";
import store from '../store'
import Board from "../view/Board";
import Card from "../view/Card";

Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
  store.state.accessToken ?
    next() :
    next(`login?returnPath=${encodeURIComponent(from.path)}`)
}

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      component: Login
    }, {
      path: '/board/:id',
      component: Board,
      beforeEnter: requireAuth(),
      children: [{
        path: 'card/:cid',
        component: Card
      }]
    },
    {
      path: '*',
      component: NotFound }
  ]
})