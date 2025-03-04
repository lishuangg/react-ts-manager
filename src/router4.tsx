import {
  createBrowserRouter,
  useActionData,
  Form,
  redirect,
} from "react-router-dom";
import App from "./App";

function Login() {
  const errors = useActionData();

  return (
    <Form method="post">
      <p>
        <input type="text" name="email" />
        {errors?.email && <span>{errors.email}</span>}
      </p>

      <p>
        <input type="text" name="password" />
        {errors?.password && <span>{errors.password}</span>}
      </p>

      <p>
        <button type="submit">登录</button>
      </p>
    </Form>
  );
}

export async function loginAction({ request }: any) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const errors:any = {
    email: "",
    password: "",
  };

  // validate the fields
  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "That doesn't look like an email address";
  }

  if (typeof password !== "string" || password.length < 6) {
    errors.password = "Password must be > 6 characters";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  // otherwise create the user and redirect
  // await createUser(email, password);
  console.log("创建用户成功");
  return redirect("/");
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
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
