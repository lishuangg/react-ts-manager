/*
 * @Author: 李爽
 * @Date: 2025-02-09 21:31:08
 * @LastEditors: 李爽
 * @LastEditTime: 2025-02-20 22:41:44
 * @FilePath: router2.tsx
 * @Description:
 */
import {
  createBrowserRouter,
  useRoutes,
  Link,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";
import App from "./App";

function ReactDome() {
  return (
    <h2>
      学习react <Link to="/">back</Link>
      {/* 学习react <Link to="..">back</Link> */}
    </h2>
  );
}
function ViteDome() {
  return <h2>学习vite</h2>;
}
function Apple() {
  return <h2>apple</h2>;
}
function Test() {
  return (
    <h2>
      学习test
      <Navigate to="/react" />
    </h2>
  );
}

function NotFound() {
  return <h2>404</h2>;
}

function Order() {
  const params = useParams(); // 获取参数
  return (
    <div>
      <h2>OrderId{params.id}</h2>
      <h2>GoodsID{params.goodsId}</h2>
    </div>
  );
}

function Goods2() {
  return (
    <div>
      <h2>商品主页</h2>
      {/* 加载组件容器 */}
      <Outlet></Outlet>
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    // 动态路由
    {
      path: "/order/:id",
      element: <Order />,
    },
    {
      path: "/goods/:goodsId/order/:id",
      element: <Order />,
    },
    //   嵌套路由
    {
      path: "/goods",
      element: <Goods2 />,
      children: [
        {
          path: "list", // 不能带/ 带着/会识别为根路径
          element: <div>list</div>,
        },
        {
          path: "card",
          element: <div>card</div>,
        },
      ],
    },
    {
      path: "/react",
      element: <ReactDome />,
    },
    {
      path: "/vite",
      element: <ViteDome />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/apple",
      element: <Apple />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    // 基础路由
    basename: "/app",
  }
);
export default router;
