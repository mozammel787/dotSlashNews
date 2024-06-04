/* eslint-disable react/no-unknown-property */
import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashbordLayOut = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex flex-col justify-between h-full p-3 w-60 bg-gray-50 text-gray-800">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <img className="w-20" src={"logo.png"} alt="" />
                <button className="p-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-800"
                  >
                    <rect width="352" height="32" x="80" y="96"></rect>
                    <rect width="352" height="32" x="80" y="240"></rect>
                    <rect width="352" height="32" x="80" y="384"></rect>
                  </svg>
                </button>
              </div>

              <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-3 text-sm ">
                  <li className="rounded-sm   hover:bg-gray-200">
                    <Link
                      to={"/"}
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current text-gray-600"
                      >
                        <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                      </svg>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="rounded-sm  hover:bg-gray-200">
                    <Link
                      to={"/dashbord"}
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="20"
                        x="0"
                        y="0"
                        viewBox="0 0 682.667 682.667"
                        xml:space="preserve"
                      >
                        <g>
                          <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                              <path
                                d="M0 512h512V0H0Z"
                                fill="#4b5563"
                                opacity="1"
                                data-original="#000000"
                              ></path>
                            </clipPath>
                          </defs>
                          <g
                            clip-path="url(#a)"
                            transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                          >
                            <path
                              d="M0 0c0-133.101-107.9-241-241-241-133.103 0-241 107.899-241 241 0 133.103 107.897 241 241 241C-107.9 241 0 133.103 0 0Z"
                              
                              transform="translate(497 256)"
                              fill="none"
                              stroke="#4b5563"
                              stroke-width="30"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-dasharray="none"
                              stroke-opacity=""
                              data-original="#000000"
                              opacity="1"
                            ></path>
                            <path
                              d="M0 0c0-53.24-43.158-96.4-96.4-96.4-53.244 0-96.401 43.16-96.401 96.4 0 53.239 43.157 96.399 96.401 96.399C-43.158 96.399 0 53.239 0 0Z"
                              
                              transform="translate(352.4 288.134)"
                              fill="none"
                              stroke="#4b5563"
                              stroke-width="30"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-dasharray="none"
                              stroke-opacity=""
                              data-original="#000000"
                              opacity="1"
                            ></path>
                            <path
                              d="M0 0c7.71 72.602 69.142 129.158 143.787 129.158 74.647 0 136.078-56.56 143.785-129.16"
                             
                              transform="translate(112.213 62.575)"
                              fill="none"
                              stroke="#4b5563"
                              stroke-width="30"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-dasharray="none"
                              stroke-opacity=""
                              data-original="#000000"
                              opacity="1"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <span>My Profile</span>
                    </Link>
                  </li>
                  {/* <li className="rounded-sm  hover:bg-gray-200">
                    <Link to={"edit-profile"}
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="20"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M414.007 148.75c5.522 0 10-4.477 10-10V30c0-16.542-13.458-30-30-30h-364c-16.542 0-30 13.458-30 30v452c0 16.542 13.458 30 30 30h364c16.542 0 30-13.458 30-30v-73.672c0-5.523-4.478-10-10-10s-10 4.477-10 10V482c0 5.514-4.486 10-10 10h-364c-5.514 0-10-4.486-10-10V30c0-5.514 4.486-10 10-10h364c5.514 0 10 4.486 10 10v108.75c0 5.523 4.478 10 10 10z"
                            fill="#4b5563"
                            opacity="1"
                            data-original="#000000"
                          ></path>
                          <path
                            d="M212.007 54c-50.729 0-92 41.271-92 92 0 26.317 11.11 50.085 28.882 66.869.333.356.687.693 1.074 1 16.371 14.979 38.158 24.13 62.043 24.13 23.885 0 45.672-9.152 62.043-24.13a9.993 9.993 0 0 0 1.074-1c17.774-16.784 28.884-40.552 28.884-66.869 0-50.729-41.271-92-92-92zm0 164c-16.329 0-31.399-5.472-43.491-14.668 8.789-15.585 25.19-25.332 43.491-25.332s34.702 9.747 43.491 25.332C243.405 212.528 228.336 218 212.007 218zm-16-76v-6.5c0-8.822 7.178-16 16-16s16 7.178 16 16v6.5c0 8.822-7.178 16-16 16s-16-7.178-16-16zm73.94 46.683a69.375 69.375 0 0 0-29.463-24.697c4.71-6.087 7.523-13.712 7.523-21.986v-6.5c0-19.851-16.149-36-36-36s-36 16.149-36 36v6.5c0 8.274 2.813 15.899 7.523 21.986a69.375 69.375 0 0 0-29.463 24.697c-8.829-11.953-14.06-26.716-14.06-42.683 0-39.701 32.299-72 72-72s72 32.299 72 72c0 15.967-5.231 30.73-14.06 42.683zM266.007 438h-54c-5.522 0-10 4.477-10 10s4.478 10 10 10h54c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 382h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM266.007 326h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM88.366 272.93a10.077 10.077 0 0 0-7.079-2.93c-2.631 0-5.211 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 328.93a10.095 10.095 0 0 0-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.092 10.092 0 0 0 7.07 2.93c2.64 0 5.21-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM88.366 384.93a10.095 10.095 0 0 0-7.079-2.93c-2.631 0-5.2 1.07-7.07 2.93-1.86 1.86-2.93 4.44-2.93 7.07s1.069 5.21 2.93 7.07a10.072 10.072 0 0 0 7.07 2.93c2.64 0 5.22-1.07 7.079-2.93 1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07zM266.007 270h-142c-5.522 0-10 4.477-10 10s4.478 10 10 10h142c5.522 0 10-4.477 10-10s-4.478-10-10-10zM491.002 130.32c-9.715-5.609-21.033-7.099-31.871-4.196-10.836 2.904-19.894 9.854-25.502 19.569L307.787 363.656a10.016 10.016 0 0 0-1.278 3.891l-8.858 79.344a10.004 10.004 0 0 0 9.937 11.11 9.99 9.99 0 0 0 5.931-1.948l64.284-47.344a9.983 9.983 0 0 0 2.73-3.052l125.841-217.963c11.58-20.056 4.684-45.794-15.372-57.374zM320.063 426.394l4.626-41.432 28.942 16.71-33.568 24.722zm48.15-39.398-38.105-22 100.985-174.91 38.105 22-100.985 174.91zm120.841-209.303-9.857 17.073-38.105-22 9.857-17.073a21.855 21.855 0 0 1 13.358-10.25 21.85 21.85 0 0 1 16.694 2.198 21.855 21.855 0 0 1 10.25 13.358 21.856 21.856 0 0 1-2.197 16.694z"
                            fill="#4b5563"
                            opacity="1"
                            data-original="#000000"
                          ></path>
                        </g>
                      </svg>
                      <span>Edit Profile</span>
                    </Link>
                  </li> */}
                  <li className="rounded-sm  hover:bg-gray-200">
                    <Link to={`my-post/${user.displayName}`}
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0" y="0" viewBox="0 0 66 66"xml:space="preserve" ><g><path d="M55.99 3.47H10.01c-3.36 0-6.09 2.73-6.09 6.09v46.89c0 3.36 2.73 6.09 6.09 6.09h45.98c3.36 0 6.09-2.73 6.09-6.09V9.56c0-3.36-2.73-6.09-6.09-6.09zM5.27 9.56c0-2.61 2.12-4.73 4.73-4.73h45.98c2.61 0 4.73 2.12 4.73 4.73v3.47H5.27zm55.46 46.88c0 2.61-2.12 4.73-4.73 4.73H10.01c-2.61 0-4.73-2.12-4.73-4.73V14.38h55.45z" fill="#4b5563" opacity="1" data-original="#000000" ></path><circle cx="12.39" cy="8.93" r=".9" fill="#4b5563" opacity="1" data-original="#000000" ></circle><circle cx="17.09" cy="8.93" r=".9" fill="#4b5563" opacity="1" data-original="#000000" ></circle><circle cx="21.78" cy="8.93" r=".9" fill="#4b5563" opacity="1" data-original="#000000" ></circle><path d="M54.25 8.25H35.79a.68.68 0 0 0 0 1.36h18.46a.68.68 0 0 0 0-1.36zM14.17 44.08h22.48c.16 0 .31-.01.47-.03.93-.1 1.8-.5 2.48-1.14.11-.11.22-.22.32-.34.65-.78 1.02-1.76 1.02-2.77V24.09c0-2.36-1.92-4.28-4.28-4.28H14.17c-2.36 0-4.28 1.92-4.28 4.28V39.8c0 .86.26 1.69.75 2.42.8 1.16 2.12 1.86 3.53 1.86zm-.65-1.43-.2-.06a2.05 2.05 0 0 1-.41-.16l-.21-.12c-.12-.07-.23-.15-.34-.23-.07-.05-.13-.11-.19-.16-.03-.03-.06-.07-.1-.11l6.74-9.19c.21-.29.55-.46.91-.46s.69.17.91.46l7.4 10.1.02.02H14.17c-.22-.01-.44-.04-.65-.09zm16.19.08-2.52-3.45 3.41-3.41c.43-.43 1.17-.43 1.59 0l6.25 6.25-.01.01c-.01.01-.03.02-.04.03-.14.1-.29.19-.44.27-.05.03-.11.05-.16.07-.13.05-.26.1-.39.13-.05.01-.11.03-.17.04-.19.04-.38.06-.57.06zM11.24 24.09c0-1.62 1.31-2.93 2.93-2.93h22.49c1.62 0 2.93 1.31 2.93 2.93V39.8c0 .45-.11.87-.3 1.26l-6.15-6.15c-.94-.94-2.57-.94-3.51 0l-3.26 3.26-4.67-6.37c-.47-.64-1.2-1.01-2-1.01s-1.53.37-2 1.01l-6.37 8.69c-.06-.23-.09-.46-.09-.7z" fill="#4b5563" opacity="1" data-original="#000000" ></path><path d="M28.99 30.11c1.8 0 3.27-1.47 3.27-3.27s-1.47-3.27-3.27-3.27c-1.81 0-3.27 1.47-3.27 3.27a3.259 3.259 0 0 0 3.27 3.27zm0-5.19a1.92 1.92 0 1 1-.001 3.841 1.92 1.92 0 0 1 .001-3.841zM45.02 24.92h12.64a.68.68 0 0 0 0-1.36H45.02a.68.68 0 0 0 0 1.36zM45.02 31.12h12.64a.68.68 0 0 0 0-1.36H45.02c-.37 0-.68.3-.68.68 0 .37.31.68.68.68zM45.02 37.31h12.64a.68.68 0 0 0 0-1.36H45.02a.68.68 0 0 0 0 1.36zM45.02 43.5h12.64a.68.68 0 0 0 0-1.36H45.02a.68.68 0 0 0 0 1.36zM9.45 49.7h47.09a.68.68 0 0 0 0-1.36H9.45c-.37 0-.68.3-.68.68.01.38.31.68.68.68zM56.55 54.54H38.18a.68.68 0 0 0 0 1.36h18.36c.37 0 .68-.3.68-.68s-.3-.68-.67-.68zM32.86 54.54h-11.8a.68.68 0 0 0 0 1.36h11.79c.37 0 .68-.3.68-.68s-.3-.68-.67-.68zM9.45 55.89h7.8a.68.68 0 0 0 0-1.36h-7.8c-.37 0-.68.3-.68.68.01.38.31.68.68.68z" fill="#4b5563" opacity="1" data-original="#000000" ></path></g></svg>
                      <span>My Post</span>
                    </Link>
                  </li>
                  <li className="rounded-sm  hover:bg-gray-200">
                    <Link to={"add-post"}
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0" y="0" viewBox="0 0 24 24"  xml:space="preserve" ><g><path d="M9.02 21H2.5A2.503 2.503 0 0 1 0 18.5v-16C0 1.121 1.122 0 2.5 0h12C15.878 0 17 1.121 17 2.5v6.06a.5.5 0 0 1-1 0V2.5c0-.827-.673-1.5-1.5-1.5h-12C1.673 1 1 1.673 1 2.5v16c0 .827.673 1.5 1.5 1.5h6.52a.5.5 0 0 1 0 1z" fill="#4b5563" opacity="1" data-original="#000000" ></path><path d="M13.5 9h-10a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1zM9.5 13h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zM8.5 5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z" fill="#4b5563" opacity="1" data-original="#000000" ></path><path d="M17.5 21a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5z" fill="#4b5563" opacity="1" data-original="#000000" ></path><path d="M20.5 18h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1z" fill="#4b5563" opacity="1" data-original="#000000" ></path></g></svg>
                      <span>Add Post</span>
                    </Link>
                  </li>

                  
                  
                </ul>
              </div>
            </div>
            <div>

          
            <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-xl  bg-gray-500"
                  alt="Tailwind CSS Navbar component "
                  src={user?.photoURL}
                />
              ) : (
                <h2 className="text-2xl text-white uppercase">
                  {user?.email[0]}
                </h2>
              )}

              <div>
                <h2 className="text-base font-semibold">{user?.displayName}</h2>
              </div>
            </div>
            <button className=" btn w-[100%] btn-primary text-white rounded-lg">
                    <div
                      onClick={() => logOut()}
                      rel="noopener noreferrer"
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current "
                      >
                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                        <rect width="32" height="64" x="256" y="232"></rect>
                      </svg>
                      <span>Logout</span>
                    </div>
                  </button>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashbordLayOut;
