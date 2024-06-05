/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MyPostCard = ({ news, relodPost }) => {
  const { title, urlToImage, description, author, publishedAt, _id ,authorPhoto} = news;

  const handelDelete = async () => {
    const token = localStorage.getItem("token");

    await fetch(
      `https://dotslashnews-backend.onrender.com/news/delete-post/${_id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Beare ${token}`,
        },
      }
    )
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        relodPost(_id);
      });
  };

  return (
    <>
      <div className="card w-[31%] h-[600px] bg-base-100 shadow">
        <figure>
          <img
            src={urlToImage}
            alt="Shoes"
            className="object-cover h-[300px] w-[100%]"
          />
        </figure>
        <div className="card-body p-3 pt-5">
          <div className="flex gap-2 items-center">
          {authorPhoto ? (
                <img
                  src={authorPhoto}
                  alt=""
                  className="s-10 w-10 rounded-full"
                />
              ) : (
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="s-10 w-10 rounded-full"
                />
              )}
            <div>
              <p>{author}</p>
              <p className="text-xs text-gray-500">
                {" "}
                {publishedAt.replace(/^(\d{4})-(\d{2})-(\d{2}).*$/, "$3/$2/$1")}
              </p>
            </div>
          </div>
          <h2 className="card-title font-bold">{title}</h2>
          <p>{description.slice(0, 250) + '...'}</p>

          <div className="flex gap-2">
            <Link
              to={`/news/${_id}`}
              className="mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Read More
            </Link>
            <Link
              to={`/dashbord/edit-post/${_id}`}
              className="mt-5 tracking-wide font-semibold bg-green-600 text-gray-100 w-full py-4 rounded hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              Edit post
            </Link>
            <div
              onClick={handelDelete}
              className="mt-5 tracking-wide font-semibold bg-red-600 text-gray-100 w-full py-4 rounded hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer"
            >
              Delete Post
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPostCard;
