export default [
  {
    exact: false,
    path: '/',
    component: '@/components/Layout',
    routes: [
      {
        path: '/overview',
        component: 'Overview',
      },
      {
        path: '/echarts',
        component: 'Echarts',
      },
      {
        path: '/antv/g2',
        component: 'G2',
      },
      {
        path: '/antv/g6',
        component: 'G6',
      },
      {
        path: '/antv/x6',
        component: 'X6',
      },
      {
        path: '/todo',
        component: 'Todo',
      },
      {
        component: '@/components/404',
      },
    ],
  },
];
