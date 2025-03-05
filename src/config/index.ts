/**
 * 环境配置封装
 */
type ENV = 'stg' | 'dev' | 'prod';

// let env: ENV = 'dev';
// if (location.host.indexOf('localhost') > -1) {
//   env = 'dev';
// } else if (location.host === 'driver-stg.marsview.cc') {
//   env = 'stg';
// } else {
//   env = 'prod';
// }

const env = document.documentElement.dataset.env as ENV || 'dev';

const config = {
  dev: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-dev.marsview.cc',
    cdn:'',
    mock: true,
    mockApi: 'https://www.fastmock.site/mock/9f89b4fc35334e712e27b22f008fb4d9/ts'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-stg.marsview.cc',
    cdn:'',
    mock: false,
    mockApi: 'https://www.fastmock.site/mock/9f89b4fc35334e712e27b22f008fb4d9/ts'
  },
  prod: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    cdn:'',
    mock: false,
    mockApi: 'https://www.fastmock.site/mock/9f89b4fc35334e712e27b22f008fb4d9/ts'
  },
};

export default {
  env,
  ...config[env],
};
