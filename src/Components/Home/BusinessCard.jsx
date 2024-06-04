/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BusinessCard = ({news}) => {

    return (
        <Link to={`news/${news._id}`}>
             <div className="mb-2">
            <a href="#"
              ><div
                className="h-40 bg-cover text-center overflow-hidden"
                 style={{ backgroundImage: `url(${news.urlToImage})` }}
                title="Woman holding a mug"
              ></div
            ></a>
            <a
              href="#"
              className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-black transition duration-500 ease-in-out"
              >{news.title}</a
            >
          </div>
        </Link>
    );
};

export default BusinessCard;