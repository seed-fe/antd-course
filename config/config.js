export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
          antd: true,
          dva: true
        }],
    ],
    routes: [{ // 配置式路由
        path: '/',
        component: '../layout',
        routes: [
          {
            path: '/',
            component: 'Helloworld',
          },
          {
            path: 'helloworld',
            component: 'HelloWorld'
          },
          {
            path: '/dashboard',
            routes: [
              { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
              { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
              { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
            ]
          },
          { path: 'puzzlecards', component: './puzzlecards' },
        ]
      }],
}