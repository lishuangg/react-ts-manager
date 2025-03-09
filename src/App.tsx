import { BrowserRouter, RouterProvider } from 'react-router';
import { ConfigProvider, App as AntdApp } from 'antd';
import router from './router';
// import Router from './router';
import './App.css';
import AntdGlobal from './utils/AntdGlobal';

function App() {
  // 组件路由
  // return <BrowserRouter><Router /></BrowserRouter>
  // api路由 - 推荐 可以使用loader action
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ed6c00'
        }
      }}
    >
      <AntdApp>
        <AntdGlobal /> 
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
