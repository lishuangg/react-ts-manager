import { useRoutes, Link, Navigate } from "react-router-dom";
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
function BaseRouter() {
  const routes = useRoutes([
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
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}

export default BaseRouter;
