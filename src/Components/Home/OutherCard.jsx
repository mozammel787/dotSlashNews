/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const OutherCard = ({news}) => {
    const { title, urlToImage, publishedAt,_id } = news;
    const date = new Date(publishedAt);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return (
        <Link to={`news/${_id}`}>
               <div className="flex items-start border-b mb-3 pb-3 ">
          <a href="#" className="inline-block mr-3">
            <div
              className="w-20 h-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${urlToImage})` }}
            ></div>
          </a>
          <div className="text-sm">
            <p className="text-gray-600 text-xs">{month} {day}</p>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text- leading-none"
            >
             {title}
            </a>
          </div>
        </div>







        
        </Link>
    );
};

export default OutherCard;