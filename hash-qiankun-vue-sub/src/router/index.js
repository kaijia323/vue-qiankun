const routes = [
  {
    path: '/hashMicro',
    redirect: '/hashMicro/test'
  },
  {
    path: '/hashMicro', // 这里是主应用的activeRule
    name: 'hashMicro',
    component: () => import('@/views/home/index'), // 用一个空的页面来包裹子路由，也可以不是空的，看需求
    children: [ // 必须用子路由，后面的路由也是写在子路由里面
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/index')
      }
    ]
  }
]

export default routes
