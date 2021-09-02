export default {
  '/mock': {
    target: 'http://yapi.realai-inc.cn',
    changeOrigin: true,
    pathRewrite: { '/mock': '/mock/92/' },
  },
  '/api': {
    target: 'http://192.168.3.210',
    changeOrigin: true,
    // pathRewrite: { '/api': '' },
  },
};
