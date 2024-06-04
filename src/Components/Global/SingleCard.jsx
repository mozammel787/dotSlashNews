import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleCard = ({ news }) => {
  const { title, urlToImage, description, author, publishedAt, _id,authorPhoto } = news;

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
          <p>{description}</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
          <Link to={`/news/${_id}`} className="mt-5 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
