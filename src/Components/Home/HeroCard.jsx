/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const HeroCard = ({ news }) => {
  const { title, urlToImage, publishedAt, author, _id } = news;

  const date = new Date(publishedAt);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });

  return (
    <Link to={`news/${_id}`}>
      <div
        className="relative w-full flex items-end justify-start text-left bg-cover bg-center h-[550px]"
        style={{ backgroundImage: `url(${urlToImage})` }}
      >
        <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
          {/* <div
           
            className="text-xs bg-black text-white px-5 py-2 uppercase hover:bg-white hover:text-black transition ease-in-out duration-500"
          >
           1
          </div> */}
          <div className="text-white font-regular flex flex-col justify-center items-center">
            <span className="text-3xl leading-0 font-semibold">{day}</span>
            <span className="-mt-2">{month}</span>
          </div>
        </div>
        <main className="p-5 z-10 flex flex-col">
          <div
            className="text-xl tracking-tight font-medium leading-7 font-regular text-white hover:underline"
            // eslint-disable-next-line react/no-unescaped-entities
          >
            {title}
          </div>
          <div
            className="text-sm tracking-tight mt-2 font-regular text-gray-300 hover:underline"
            // eslint-disable-next-line react/no-unescaped-entities
          >
            - {author}
          </div>
        </main>
      </div>
    </Link>
  );
};

export default HeroCard;
