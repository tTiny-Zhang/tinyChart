export default [
  {
    exact: false,
    path: '/',
    component: '@/components/Layout',
    routes: [{ exact: true, path: '/', component: 'Overview' }],
  },
];
