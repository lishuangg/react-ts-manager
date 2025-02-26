import { BrowserRouter, RouterProvider } from 'react-router';
import router from './router';
// import Router from './router';
import './App.css';

function App() {
    // 组件路由
    // return <BrowserRouter><Router /></BrowserRouter>
    // api路由 - 推荐 可以使用loader action
    return <RouterProvider router={router} />;
}

export default App;
