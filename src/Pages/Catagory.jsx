import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../Components/Global/SingleCard";
import Loding from "../Components/Global/Loding";

const Catagory = () => {
  const news = useLoaderData();
  const [articles, setArticles] = useState(news || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(news)) {
      // Sort the articles by publishedAt date
      const sortedArticles = [...news].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      setArticles(sortedArticles);
    }
  }, [news]);

  useEffect(() => {
    if (articles) {
      setLoading(false);
    }
  }, [articles]);

  if (loading) {
    return <Loding />;
  }

  return (
    <>
      <div className="container mx-auto my-20 flex flex-wrap gap-10 items-center  justify-around px-5 md:px-0">
        {articles?.map((data) => (
          <SingleCard key={data._id} news={data}></SingleCard>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </>
  );
};

export default Catagory;
