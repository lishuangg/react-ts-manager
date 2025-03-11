import { Navigate, createBrowserRouter, useRoutes } from 'react-router-dom';
import Login from '@/views/login';
import Welcome from '@/views/welcome';
import Error404 from '@/views/404';
import Error403 from '@/views/403';
import Layout from '@/layout';

const routers = [
    {
        path: '/',
        element: <Navigate to="/welcome" />
        },
    {
        path: '/login',
        element: <Login />
    },
    {
        element: <Layout />,
        children: [
            {
                path: '/welcome',
                element: <Welcome />
            },
        ]
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
