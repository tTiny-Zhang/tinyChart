import { defineConfig } from 'umi';

import routes from './router';

export default defineConfig({
  title: 'tTiny',
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  routes,
  fastRefresh: {},
});
