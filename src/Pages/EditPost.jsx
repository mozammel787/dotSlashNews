import { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const EditPost = () => {
  const news = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { title, urlToImage, description, top, _id, category } = news;

  const [newCategory, setNewCategory] = useState(category);

  useEffect(() => {
    if (category) {
      setNewCategory(category);
    }
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const form = e.target;
    const title = form.elements.title.value;
    const urlToImage = form.elements.urlToImage.value;
    const description = form.elements.description.value;
    const top = form.elements.top.checked;

    const post = {
      title,
      urlToImage,
      description,
      category: newCategory,
      top,
    };

    await fetch(`https://dotslashnews-backend.onrender.com/news/edit-post/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Beare ${token}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Successfully Changed')
          navigate(`/dashbord/my-post/${user.email}`);
        }
      }).catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
      <div className="p-2 md:p-4">
        <div className="w-full mx-auto px-6 pb-8 mt-8 sm:max-w-xl sm:rounded">
          <h2 className="pl-6 text-2xl text-center font-bold sm:text-3xl">
            Edit Post
          </h2>
          <div className="grid max-w-xl mx-auto mt-8">
            <form
              onSubmit={handleSubmit}
              className="items-center sm:mt-5 text-[#000]"
            >
              <div className="mb-5 md:mb-2 sm:mb-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                />
              </div>
              <div className="mb-5 md:mb-2 col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm border focus:outline-none focus:border-gray-400 focus:bg-white">
                  <span className="inline-flex items-center px-8 py-4 font-medium bg-gray-100 border-gray-200 placeholder-gray-500 text-sm focus:bg-white">
                    http://
                  </span>
                  <input
                    type="url"
                    name="urlToImage"
                    defaultValue={urlToImage}
                    className="w-full px-8 py-4 font-medium bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
              <div className="mb-5 md:mb-2 sm:my-6">
                <label className="block mb-2 text-sm font-medium text-black">
                  Category
                </label>
                <div className="flex flex-col md:flex-row md:gap-5">
                  {[
                    "business",
                    "sports",
                    "entertainment",
                    "science",
                    "technology",
                  ].map((cat) => (
                    <div className="form-control" key={cat}>
                      <label className="label cursor-pointer gap-2">
                        <span className="label-text capitalize">{cat}</span>
                        <input
                          type="radio"
                          name="Category"
                          value={cat}
                          checked={newCategory === cat}
                          onChange={() => setNewCategory(cat)}
                          className="radio checked:bg-black"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label>
                  <span className="block mb-2 text-sm font-medium text-black">
                    Set it top news
                  </span>
                  <input
                    type="checkbox"
                    className="checkbox mx-1"
                    name="top"
                    defaultChecked={top}
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-black">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="7"
                  defaultValue={description}
                  className="w-full px-8 py-4 rounded font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  Edit Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
