/* eslint-disable react/prop-types */

import HeroCard from "./HeroCard";

const Hero = ({ news }) => {
  const businessNews = news?.filter((data) => data.top === true);
  const letestNews = businessNews.slice(0, 4);

  return (
    <div>
      <div className="max-w-screen mx-auto my-5 sm:my-10 p-5 sm:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5">
          {
            // eslint-disable-next-line react/prop-types
            letestNews.map( (data) =>
                
                  <HeroCard className="" key={data._id} news={data}></HeroCard>
               
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
