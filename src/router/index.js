import { createRouter, createWebHashHistory } from 'vue-router'
import ClavierView from '@/views/ClavierView.vue'
import ContactViewVue from '@/views/ContactView.vue'
import HistoriqueViewVue from '@/views/HistoriqueView.vue'
import CreateViewVue from '@/views/CreateView.vue'

const routes = [
  {
    path: '/',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactViewVue
  },
  {
    path: '/historique',
    name: 'historique',
    component: HistoriqueViewVue
  },
  {
    path: '/create',
    name: 'create',
    component: CreateViewVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
