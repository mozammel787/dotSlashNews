import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const AddPost = () => {
  const { user } = useAuth();
  const [catagory, setCatagory] = useState("");


  const handelSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form?.title?.value;
    const urlToImage = form?.urlToImage?.value;
    const description = form?.description?.value;

    const top = form?.top?.checked;
    const author = user?.displayName;
    const authorPhoto = user?.photoURL;
    const authorEmail = user?.email;

    const originalDate = new Date();
    const hoursDifference = 6;
    originalDate.setHours(originalDate.getHours() - hoursDifference);
    const publishedAt = originalDate.toISOString().slice(0, 19) + "Z";

    const post = {
      title,
      urlToImage,
      description,
      author,
      publishedAt,
      catagory,
      authorPhoto,
      top,
      authorEmail,
    };

    await fetch("https://dot-slash-news-back-end.vercel.app/news/add-post", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    form.reset();
  };
  return (
    <div className="w-full min-h-screen  py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4 ">
        <div className="w-full mx-auto px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
          <h2 className="pl-6 text-2xl text-center font-bold sm:text-3xl">
            Add Post
          </h2>

          <div className="grid max-w-xl mx-auto mt-8">
            <form
              onSubmit={handelSubmit}
              className="items-center sm:mt-5 text-[#000]"
            >
              <div className="mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                 
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm border focus:outline-none focus:border-gray-400 focus:bg-white">
                  <span className="inline-flex items-center px-8 py-4 font-medium bg-gray-100  border-gray-200 placeholder-gray-500 text-sm  focus:bg-white ">
                    http://
                  </span>
                  <input
                    type="url"
                    name="urlToImage"
                    className="w-full px-8 py-4 font-medium bg-gray-100   placeholder-gray-500 text-sm focus:outline-none  focus:bg-white "
                    placeholder="www.example.com"
                    
                  />
                </div>
              </div>

              <div className="mb-2 sm:my-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Catagory
                </label>
                <div className="flex gap-5">
                  <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                      <span className="label-text">Business</span>
                      <input
                        type="radio"
                        name="Catagory"
                        value="business"
                        checked={catagory === "business"}
                        onChange={() => setCatagory("business")}
                        className="radio checked:bg-black"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                      <span className="label-text">Sports</span>
                      <input
                        type="radio"
                        name="Catagory"
                        value="sports"
                        checked={catagory === "sports"}
                        onChange={() => setCatagory("sports")}
                        className="radio checked:bg-black"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                      <span className="label-text">Entertainment</span>
                      <input
                        type="radio"
                        name="Catagory"
                        value="entertainment"
                        checked={catagory === "entertainment"}
                        onChange={() => setCatagory("entertainment")}
                        className="radio checked:bg-black"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                      <span className="label-text">Science</span>
                      <input
                        type="radio"
                        name="Catagory"
                        value="science"
                        checked={catagory === "science"}
                        onChange={() => setCatagory("science")}
                        className="radio checked:bg-black"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                      <span className="label-text">Technology</span>
                      <input
                        type="radio"
                        name="Catagory"
                        value="technology"
                        checked={catagory === "technology"}
                        onChange={() => setCatagory("technology")}
                        className="radio checked:bg-black"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label>
                  <span className="block mb-2 text-sm font-medium text-black">
                    Set it top news
                  </span>
                  <input type="checkbox" className="checkbox mx-1" name="top" />
                </label>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="7"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white  "
                  placeholder=" Description"
                 
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  Add Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
