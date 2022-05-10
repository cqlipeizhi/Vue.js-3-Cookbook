// import Index from '@/views/user/Index.vue'
// import List from '@/views/user/List.vue'
// import View from '@/views/user/View.vue'
// import Edit from '@/views/user/Edit.vue'
// import Create from '@/views/user/Create.vue'

export default [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/Index.vue'),
    meta: {
      authenticated: true
    },
    children: [
      {
        path: '',
        name: 'list',
        component: () => import('@/views/user/List.vue'),
        meta: {
          authenticted: true
        }
      },
      {
        path: ':id',
        name: 'view',
        component: () => import('@/views/user/View.vue'),
        meta: {
          authenticated: true
        }
      },
      {
        path: 'edit/:id',
        name: 'edit',
        component: () => import('@/views/user/Edit.vue'),
        meta: {
          authenticated: true
        }
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('@/views/user/Create.vue'),
        meta: {
          authenticated: true
        }
      }
    ]
  }
]
