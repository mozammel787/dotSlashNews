import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import {  useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dotslashnews-backend.onrender.com/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const displayName = form.name.value;
    const bio = form.bio.value;
    const phoneNumber = form.phone.value;
    const photoURL = form.photoURL.value;

    const newData = { email, displayName, bio, phoneNumber, photoURL };

    await fetch(`https://dotslashnews-backend.onrender.com/user/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data) 
        if (data.acknowledged) {
          navigate('/dashbord');
        }
      });
    };

  return (
    <div className="w-full min-h-screen  py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4 ">
        <div className="w-full mx-auto px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl text-center font-bold sm:text-3xl">
            Edit Profile
          </h2>

          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center mx-auto space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-gray-300 dark:ring-black"
                src={userInfo?.photoURL}
                alt="Bordered avatar"
              />
            </div>

            <form
              onSubmit={handelSubmit}
              className="items-center sm:mt-5 text-[#000]"
            >
              <div className="mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  defaultValue={userInfo?.displayName}
                />
              </div>
              <div className="mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  defaultValue={userInfo?.email}
                />
              </div>

              <div className="mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  "
                  placeholder="phone"
                  defaultValue={userInfo?.phoneNumber}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Profile Photo URL
                </label>
                <input
                  type="url"
                  name="photoURL"
                  defaultValue={userInfo?.photoURL}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  placeholder="Profile Photo URL"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  password
                </label>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  type="password"
                  placeholder="New Password"
                  name="password"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="4"
                  defaultValue={userInfo?.bio}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  "
                  placeholder="Write your bio here..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
