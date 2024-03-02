export default [
  {
    exact: false,
    path: '/',
    component: '@/components/Layout',
    routes: [
      {
        path: '/tinyChart/overview',
        component: 'Overview',
      },
      {
        path: '/tinyChart/echarts',
        component: 'Echarts',
      },
      {
        path: '/tinyChart/antv/g2',
        component: 'G2',
      },
      {
        path: '/tinyChart/antv/g6',
        component: 'G6',
      },
      {
        path: '/tinyChart/antv/x6',
        component: 'X6',
      },
      {
        path: '/tinyChart/todo',
        component: 'Todo',
      },
      {
        component: '@/components/404',
      },
    ],
  },
];
