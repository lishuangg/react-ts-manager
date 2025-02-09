/*
 * @Author: 李爽
 * @Date: 2025-02-09 21:31:08
 * @LastEditors: 李爽
 * @LastEditTime: 2025-02-09 21:36:57
 * @FilePath: router2.tsx
 * @Description:
 */
import {
  createBrowserRouter,
  useRoutes,
  Link,
  Navigate,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);
export default router;
