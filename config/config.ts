import { defineConfig } from 'umi';

import routes from './router';

export default defineConfig({
  title: 'tTiny',
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // history: { type: 'hash' },
  antd: {},
  // exportStatic: {},
  // dynamicImport: {},
  // runtimePublicPath: true,
  routes,
  fastRefresh: {},
  outputPath: 'docs',
  chainWebpack(memo, { env, webpack }) {
    // 删除 umi 内置插件
    memo.plugins.delete('copy');
  },
  theme: {
    'primary-color': '#1DA57A',
    '@border-radius-base': '6px',
  },
});
