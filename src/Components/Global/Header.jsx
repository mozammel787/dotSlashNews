import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <>
      <div className="navbar bg-base-200 ">
        <div className="container mx-auto justify-between">
          <div className="">
            <Link to={"/"} className="btn btn-ghost text-xl">
              <img className="w-[90px]" src="logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar-center">
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/all-news"}>All News</Link>
                </li>
                <li>
                  <Link to={"/catagory/business"}>Business</Link>
                </li>
                <li>
                  <Link to={"/catagory/sports"}>Sports</Link>
                </li>
                <li>
                  <Link to={"/catagory/entertainment"}>Entertainment</Link>
                </li>
                <li>
                  <Link to={"/catagory/science"}>Science</Link>
                </li>
                <li>
                  <Link to={"/catagory/technology"}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar flex-2"
            >
              {user ? (
                <div className="w-10 rounded-full border-2 border-black ">
                  {user?.photoURL ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  ) : (
                    <h2 className="text-2xl uppercase">{user?.email[0]}</h2>
                  )}
                </div>
              ) : (
                <Link to={"/login"} className="btn btn-primary">
                  Login
                </Link>
              )}
            </div>
            {user && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/dashbord"} className="justify-between">
                    Dashbord
                  </Link>
                </li>

                <li className="mt-3">
                  <div
                    className="bg-red-600 text-white"
                    onClick={() => logOut()}
                  >
                    Logout
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
