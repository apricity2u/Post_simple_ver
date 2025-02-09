import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import PostCreate from "../pages/PostCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/my-page",
        element: <MyPage />
      },
      {
        path: "/posts",
        element: <PostList />
      },
      {
        path: "/posts/create",
        element: <PostCreate />
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />
      }
    ],
  }
]);

export default router;