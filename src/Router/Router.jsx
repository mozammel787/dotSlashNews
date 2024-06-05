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
import EditProfile from "../Pages/EditProfile";
import AddPost from "../Pages/AddPost";
import MyPost from "../Pages/MyPost";
import EditPost from "../Pages/EditPost";
import ErrorPage from "../Pages/ErrorPage";
import SearchFilter from "../Pages/SearchFilter";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("https://dotslashnews-backend.onrender.com/news"),
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
          fetch(`https://dotslashnews-backend.onrender.com/news/${params.id}`),
      },
      {
        path: "all-news",
        element: <AllNews />,
        loader: () => fetch("https://dotslashnews-backend.onrender.com/news"),
      },
      {
        path: "catagory/business",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dotslashnews-backend.onrender.com/news/catagory/business`
          ),
      },
      {
        path: "catagory/sports",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dotslashnews-backend.onrender.com/news/catagory/sports`
          ),
      },
      {
        path: "catagory/entertainment",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dotslashnews-backend.onrender.com/news/catagory/entertainment`
          ),
      },
      {
        path: "catagory/science",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dotslashnews-backend.onrender.com/news/catagory/science`
          ),
      },
      {
        path: "catagory/technology",
        element: <Catagory />,
        loader: () =>
          fetch(
            `https://dotslashnews-backend.onrender.com/news/catagory/technology`
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
            `https://dotslashnews-backend.onrender.com/news/my-post/${params.id}`
          ),
      },
      {
        path: "edit-post/:id",
        element: <EditPost></EditPost>,
        loader: ({ params }) =>
          fetch(`https://dotslashnews-backend.onrender.com/news/${params.id}`),
      },
    ],
  },
]);
