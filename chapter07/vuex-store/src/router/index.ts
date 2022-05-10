import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import List from '@/views/List.vue'
// import View from '@/views/View.vue'
// import Edit from '@/views/Edit.vue'
// import Create from '@/views/Create.vue'
// import Contact from '../views/contact.vue'
import UserRoutes from './user'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/Login.vue'
import AuthenticationMiddleware from './middleware/authentication'

const routes: Array<RouteRecordRaw> = [
  ...UserRoutes,
  // {
  //   path: '/user',
  //   name: 'list',
  //   alias: '/',
  //   component: List
  // },
  // {
  //   path: '/user/:id',
  //   name: 'view',
  //   alias: '/view/:id',
  //   component: View
  // },
  // {
  //   path: '/user/edit/:id',
  //   name: 'edit',
  //   alias: '/edit/:id',
  //   component: Edit
  // },
  // {
  //   path: '/user/create',
  //   name: 'create',
  //   alias: '/create',
  //   component: Create
  // },
  {
    path: '/create-new-user',
    redirect: '/user/create'
  },
  {
    path: '/users',
    redirect: {
      name: 'list'
    }
  },
  {
    path: '/my-user/:id?',
    redirect(to) {
      if (to.params.id) {
        return '/user/' + to.params.id
      }
      return '/user'
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: Contact
  // },
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      authenticated: false
    }
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
    meta: {
      authenticated: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(AuthenticationMiddleware)

export default router
