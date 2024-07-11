import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home";
import AllNews from "../Pages/AllNews";
import Catagory from "../Pages/Catagory";
import SingleNewsPage from "../Pages/SingleNewsPage";
import Login from "../Pages/Login";
import Ragistation from "../Pages/Registration";
import DashbordLayOut from "../Layout/DashbordLayOut";
import MyProfile from "../Pages/MyProfile";
import PriveatRouter from "./PriveatRouter";
import AddPost from "../Pages/AddPost";
import MyPost from "../Pages/MyPost";
import EditPost from "../Pages/EditPost";
import ErrorPage from "../Pages/ErrorPage";
import SearchFilter from "../Pages/SearchFilter";
import EditProfile from "../Pages/EditProfile";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("https://dot-slash-news-back-end.vercel.app/news"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/ragistation",
        element: <Ragistation />,
      },
      {
        path: "news/:id",
        element: <SingleNewsPage />,
        loader: ({ params }) =>
          fetch(`https://dot-slash-news-back-end.vercel.app/news/${params.id}`),
      },
      {
        path: "all-news",
        element: <AllNews />,
        loader: () => fetch("https://dot-slash-news-back-end.vercel.app/news"),
      },
      {
        path: "catagory/business",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dot-slash-news-back-end.vercel.app/news/catagory/business`
          ),
      },
      {
        path: "catagory/sports",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dot-slash-news-back-end.vercel.app/news/catagory/sports`
          ),
      },
      {
        path: "catagory/entertainment",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dot-slash-news-back-end.vercel.app/news/catagory/entertainment`
          ),
      },
      {
        path: "catagory/science",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dot-slash-news-back-end.vercel.app/news/catagory/science`
          ),
      },
      {
        path: "catagory/technology",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dot-slash-news-back-end.vercel.app/news/catagory/technology`
          ),
      },
      {
        path: "search",
        element: <SearchFilter />,
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PriveatRouter>
        <DashbordLayOut />
      </PriveatRouter>
    ),
    children: [
      {
        path: "",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "edit-profile",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "add-post",
        element: <AddPost></AddPost>,
      },
      {
        path: "my-post/:id",
        element: <MyPost></MyPost>,
        loader: ({ params }) =>
          fetch(
            `https://dot-slash-news-back-end.vercel.app/news/my-post/${params.id}`
          ),
      },
      {
        path: "edit-post/:id",
        element: <EditPost></EditPost>,
        loader: ({ params }) =>
          fetch(`https://dot-slash-news-back-end.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
