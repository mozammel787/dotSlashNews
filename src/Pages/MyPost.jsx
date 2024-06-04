import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyPostCard from "../Components/Global/MyPostCard";

const MyPost = () => {
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

  const relodPost=(id)=>{
    setArticles(articles?.filter((articles)=>articles._id !== id))
  }

  return (
    <>
    <h2 className="my-10 text-2xl text-center font-bold sm:text-3xl">My Post</h2>
      <div className="container my-20 mx-auto flex flex-wrap gap-10 items-center justify-around">
        {articles?.map((data) => (
          <MyPostCard key={data._id} news={data} relodPost={relodPost}></MyPostCard>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </>
  );
};

export default MyPost;