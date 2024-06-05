import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";

const Ragistation = () => {
  const { googleLogin, gitHubLogIn, ragistation, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handelGoogleSubmit = () => {
    googleLogin()
      .then((result) => {
        const user = {
          displayName: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
          phoneNumber: result?.user?.phoneNumber,
        };
        fetch("https://dotslashnews-backend.onrender.com/user/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      })
      .catch((err) => {
        console.log(err);
        console.log(err);
      });
  };
  const handelGitHubLogIn = () => {
    gitHubLogIn()
      .then((result) => {
        const user = {
          displayName: result?.user?.displayName,
          email: result?.user?.email,
          photoURL: result?.user?.photoURL,
          phoneNumber: result?.user?.phoneNumber,
        };
        fetch("https://dotslashnews-backend.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      })
      .catch((err) => {
        console.log(err);
        console.log(err);
      });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confarmPassword = form.confarmPassword.value;

    if (password === confarmPassword) {
      await ragistation(email, password)
        .then((result) => {
          const user = {
            displayName: displayName,
            email: result?.user?.email,
            photoURL: photoURL,
            phoneNumber: result?.user?.phoneNumber,
          };
          fetch("https://dotslashnews-backend.onrender.com/user", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("token", data?.token);
            });
        })
        .catch((err) => {
          console.log(err);
          console.log(err);
        });

      form.reset();
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:my-10 sm:mx-10 bg-white shadow  flex justify-center flex-row-reverse flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img src="logo.png" className="w-32 mx-auto" alt="Logo" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign up for wright News
              </h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                  <button
                    onClick={handelGoogleSubmit}
                    className="w-full max-w-xs font-bold shadow-sm rounded py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                  >
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                          <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                          />
                          <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                          />
                          <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                          />
                          <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                          />
                        </svg>
                      </svg>
                    </div>
                    <span className="ml-4">Sign Up with Google</span>
                  </button>

                  <button
                    onClick={handelGitHubLogIn}
                    className="w-full max-w-xs font-bold shadow-sm rounded py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                  >
                    <div className="bg-white p-1 rounded-full">
                      <svg className="w-6" viewBox="0 0 32 32">
                        <svg className="w-6" viewBox="0 0 32 32">
                          <path
                            fillRule="evenodd"
                            d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                          />
                        </svg>
                      </svg>
                    </div>
                    <span className="ml-4">Sign Up with GitHub</span>
                  </button>
                </div>

                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign Up with e-mail
                  </div>
                </div>

                <form onSubmit={handelSubmit} className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <input
                    type="url"
                    name="photoURL"
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    placeholder="Profile Photo URL"
                  />

                  <input
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="New Password"
                    name="password"
                  />
                  <input
                    className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confarm Password"
                    name="confarmPassword"
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                    Do you have an account ?{" "}
                    <Link
                      to={"/login"}
                      className="cursor-pointer text-black hover:text-black"
                    >
                      Sign In
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('hero.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ragistation;
