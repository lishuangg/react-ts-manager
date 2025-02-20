/*
 * @Author: 李爽
 * @Date: 2025-02-09 20:23:11
 * @LastEditors: 李爽
 * @LastEditTime: 2025-02-20 22:42:11
 * @FilePath: main.tsx
 * @Description:
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import BaseRouter from "./router1.tsx";
// import router from "./router2.tsx";
import router from "./router3.tsx";

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <HashRouter>
//     <Routes><Route path="/" element={<App />}></Route>
//       <Route path="/*" element={<NotFound />}></Route>
//       <Route path="/react" element={<ReactDome />}></Route>
//       <Route path="/vite" element={<ViteDome />}></Route>
//       <Route path="/test" element={<Navigate to="/react" />}></Route>
//     </Routes>
//   </HashRouter>
// );

// createRoot(document.getElementById("root") as HTMLElement).render(
//   <HashRouter>
//     <BaseRouter />
//   </HashRouter>
// );

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
