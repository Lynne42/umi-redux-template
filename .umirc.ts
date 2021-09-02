import { defineConfig } from 'umi';
import routerConfig from './config/router.config';
import proxy from './config/proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  routes: routerConfig,
  proxy: proxy,
  fastRefresh: {},
});
