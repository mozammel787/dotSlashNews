/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SoprtCard = ({news}) => {
    const { title, urlToImage, description, publishedAt ,_id} = news;
    const date = new Date(publishedAt);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <Link to={`news/${_id}`}>
            <div className="flex flex-col justify-between border-b pb-5 md:h-[200px]">
              <a href="#" className="text-gray-900 font-medium hover:text-black">{title}</a>
              <div className="flex items-start justify-between mt-3">
                <div className="text-sm w-2/3">
                  <p className="text-gray-700">{description.slice(0, 250) + '...'}</p>
                  <p className="text-gray-600 text-xs">{month} {day}</p>
                </div>
                <a href="#" className="inline-block ml-2">
                  <div className="w-20 h-20 bg-cover bg-center" style={{ backgroundImage: `url(${urlToImage})` }}
      ></div>
                </a>
              </div>
            </div>
        </Link>
    );
};

export default SoprtCard;