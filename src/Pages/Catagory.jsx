import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../Components/Global/SingleCard";

const Catagory = () => {
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
      <div className="container mx-auto my-20 flex flex-wrap gap-10 items-center  justify-around">
        {articles.map((data) => (
          <SingleCard key={data.articles} news={data}></SingleCard>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </>
  );
};

export default Catagory;
