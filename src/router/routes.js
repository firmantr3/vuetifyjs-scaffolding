const HelloWorld = () => import('@/pages/HelloWorld').then(m => m.default || m)
const NotFound = () => import('@/pages/errors/404').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: HelloWorld },

  { path: '*', component: NotFound }
]
