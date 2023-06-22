import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import MyAccount from "./MyAccount";
import Admin from "./Admin";
import Users from "./Users";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/users",
      element: <Users />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
