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
    uploadApi: 'http://api-driver.marsview.cc',
    cdn:'',
    mock: true,
    mockApi: 'https://apifoxmock.com/m1/5997068-5685565-default/api'
  },
  stg: {
    baseApi: '/api',
    uploadApi: 'http://api-driver-stg.marsview.cc',
    cdn:'',
    mock: false,
    mockApi: 'https://apifoxmock.com/m1/5997068-5685565-default'
  },
  prod: {
    baseApi: '/api',
    uploadApi: 'http://api-driver.marsview.cc',
    cdn:'',
    mock: false,
    mockApi: 'https://apifoxmock.com/m1/5997068-5685565-default'
  },
};

export default {
  env,
  ...config[env],
};
