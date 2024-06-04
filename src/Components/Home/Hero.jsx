/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import HeroCard from "./HeroCard";

const Hero = ({ news }) => {
  const [articles, setArticles] = useState(news || []);
  const cards = [1, 2, 3, 4];
  useEffect(() => {
    if (Array.isArray(news)) {
      // Sort the articles by publishedAt date
      const sortedArticles = [...news].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      setArticles(sortedArticles);
    }
  }, [news]);

  const letestNews = articles.slice(0, 4);
  return (
    <div>
      <div className="max-w-screen mx-auto my-5 sm:my-10 p-5 sm:p-0">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {
            // eslint-disable-next-line react/prop-types
            letestNews?.map(
              (data) =>
                data.top && (
                  <HeroCard className="" key={data._id} news={data}></HeroCard>
                )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
