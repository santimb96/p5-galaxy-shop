import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Pago from '../views/Pago.vue'
import PagadoComponent from "../components/PagadoComponent.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/pago",
    name: "Pago",
    component: Pago
  },
  {
    path: "/pagado",
    name: "pagado",
    component: PagadoComponent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
