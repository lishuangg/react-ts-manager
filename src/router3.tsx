/*
 * @Author: 李爽
 * @Date: 2025-02-09 21:31:08
 * @LastEditors: 李爽
 * @LastEditTime: 2025-02-21 00:14:03
 * @FilePath: router3.tsx
 * @Description:
 */
import {
  createBrowserRouter,
  useParams,
  redirect,
  useLoaderData,
} from "react-router-dom";
import App from "./App";

function Order() {
  const data = useLoaderData(); // 获取loader数据
  console.log("Order init---", data);
  const params = useParams(); // 获取参数
  return (
    <div>
      <h2>OrderId{params.id}</h2>
    </div>
  );
}

function orderLoader({ params }: any) {
  console.log("orderLoader init---", params.id);
  // return redirect("/login"); // 重定向到登录页面
  if(!sessionStorage.token) return redirect("/login");  // 登录信息拦截
  return fetch(`/${params.id}.json`)  // 获取用户信息
  // return {
  //   userName: 'jack',
  //   token: sessionStorage.token,
  //   id: params.id
  // }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/order/:id",
    element: <Order />,
    loader: orderLoader, // 先执行loader，再执行element
  },
]);
export default router;
