import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const EditProfile = () => {
  const { user, passwordChange } = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dot-slash-news-back-end.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  const handelSubmit = async (e) => {
    const token = localStorage.getItem("token");
    e?.preventDefault();
    const form = e?.target;

    const email = form?.email?.value;
    const displayName = form?.name?.value;
    const bio = form?.bio?.value;
    const phoneNumber = form?.phone?.value;
    const photoURL = form?.photoURL?.value;
    const currentPassword = form?.oldPassword?.value;
    const newPassword = form?.newPassword?.value;

    const newData = { email, displayName, bio, phoneNumber, photoURL };

    if (!currentPassword == "" && !newPassword == "") {
      await passwordChange(currentPassword, newPassword)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    await fetch(
      `https://dot-slash-news-back-end.vercel.app/user/${user?.email}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          authorization: `Beare ${token}`,
        },
        body: JSON.stringify(newData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Change Successfull");
          navigate("/dashbord");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="w-full min-h-screen mt-28  py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4 ">
        <div className="w-full mx-auto px-6 pb-8 mt-8 sm:max-w-xl sm:rounded">
          <h2 className="pl-6 text-2xl text-center font-bold sm:text-3xl">
            Edit Profile
          </h2>

          <div className="grid max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center mx-auto space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-gray-300 dark:ring-primary"
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
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
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
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
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
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  "
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
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                  placeholder="Profile Photo URL"
                />
              </div>

              {!user?.emailVerified && (
                <div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-black">
                      Old password
                    </label>
                    <input
                      className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="password"
                      placeholder="Old Password"
                      name="oldPassword"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-black">
                      New Password
                    </label>
                    <input
                      className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                      type="password"
                      placeholder="New Password"
                      name="newPassword"
                    />
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Bio
                </label>
                <textarea
                  name="bio"
                  rows="4"
                  defaultValue={userInfo?.bio}
                  className="w-full px-8 py-4 rounded-xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  "
                  placeholder="Write your bio here..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" btn btn-primary w-full"
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
