import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path:'',
        name: 'home default',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/HomeDefault.vue'),
        props:true
      },
      
      {
        path:':id',
        name: 'Edit Task',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/HomeEdit.vue'),
        props:true
      }
    ]
  },
  {
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue'),
    children:[
      {
        path: ':id',
        name: 'details',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Details/MoreDetails.vue'),

      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
