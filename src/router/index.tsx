import { Navigate, createBrowserRouter, useRoutes } from 'react-router-dom';
import Login from '@/views/Login/Login';
import Welcome from '@/views/Welcome';
import Error404 from '@/views/404';
import Error403 from '@/views/403';

const routers = [
    {
        path: '/',
        element: <Welcome />
        },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <Navigate to="/404" />
    },
    {
        path: '/404',
        element: <Error404 />
    },
    {
        path: '/403',
        element: <Error403 />
    }
];

// 组件路由
// export default function Router() {
//     return useRoutes(routers)
// }

// api路由
export default createBrowserRouter(routers);
