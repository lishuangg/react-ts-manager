import { BrowserRouter, RouterProvider } from 'react-router';
import { ConfigProvider } from 'antd';
import router from './router';
// import Router from './router';
import './App.css';

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
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
