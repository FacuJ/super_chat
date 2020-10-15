
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Users.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
      { path: '/login_register', component: () => import('pages/LoginRegister.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
