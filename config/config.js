export default {
  singular: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true, // locale: {
        //   enable: true,
        // }
      },
    ],
  ],
  routes: [
    {
      // 配置式路由
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: './index',
        },
        {
          path: '/',
          component: 'Helloworld',
        },
        {
          path: 'helloworld',
          component: 'HelloWorld',
        },
        {
          path: '/dashboard',
          routes: [
            {
              path: '/dashboard/analysis',
              component: 'Dashboard/Analysis',
            },
            {
              path: '/dashboard/monitor',
              component: 'Dashboard/Monitor',
            },
            {
              path: '/dashboard/workplace',
              component: 'Dashboard/Workplace',
            },
          ],
        },
        {
          path: 'puzzlecards',
          component: './puzzlecards',
        },
        {
          path: 'list',
          component: './list',
        },
        {
          path: 'css-modules-with-less',
          component: './css-modules-with-less',
        },
        {
          path: 'css-modules-with-antd',
          component: './css-modules-with-antd',
        },
      ],
    },
  ],
  proxy: {
    '/dev': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      pathRewrite: {
        '^/dev': '', // 把 dev 重写掉
      },
    },
  },
  theme: {
    "@primary-color": "#30b767",
  }
};
