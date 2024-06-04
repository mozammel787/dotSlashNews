/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SingleCard from "../Components/Global/SingleCard";
import { useLoaderData } from "react-router-dom";

const AllNews = () => {
  const news = useLoaderData();
  const [articles, setArticles] = useState(news || []);
  useEffect(() => {
    if (Array.isArray(news)) {
      // Sort the articles by publishedAt date
      const sortedArticles = [...news].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      setArticles(sortedArticles);
    }
  }, [news]);

  return (
    <>
<h2 className="text-center text-5xl font-bold mt-10" >All News</h2>
      <div className="container mx-auto my-10 flex flex-wrap gap-10 items-center  justify-around">
        {articles.map((data) => (
          <SingleCard key={data.articles} news={data}>
       
          </SingleCard>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </>
  );
};

export default AllNews;
