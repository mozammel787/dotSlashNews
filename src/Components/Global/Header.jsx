import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <>
      <div className="navbar bg-base-200 md:py-5">
        <div className="container mx-auto justify-between">
          <div className="flex items-center">
          <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
            <Link to={"/"} className=" text-xl">
              <img className="w-[70px] md:w-[90px]" src="logo.png" alt="" />
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
          <div className="flex items-center gap-7 mr-3">
            <Link to={"search"} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>

            <div className=" dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar flex-2"
              >
                {user ? (
                  <div className="w-10 rounded-full border-2 border-gray-300 ">
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
                  <Link to={"/login"} className="btn rounded btn-primary ">
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
                    <Link
                      to={"/dashbord"}
                      className="mt-5 tracking-wide font-semibold bg-gray-300 text-black w-full py-3 rounded hover:bg-black hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center"
                    >
                      <span className=" text-center ">Dashbord</span>
                    </Link>
                  </li>

                  <li className="mt-3">
                    <div
                      className="  tracking-wide font-semibold bg-gray-300 text-black w-full py-3 rounded hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center "
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
      </div>
    </>
  );
};

export default Header;
