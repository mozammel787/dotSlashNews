import { useLoaderData } from "react-router-dom";
import MyPostCard from "../Components/Global/MyPostCard";
import { useEffect, useState } from "react";
import Loding from "../Components/Global/Loding";

const MyPost = () => {
  const news = useLoaderData();
  const [articles, setArticles] = useState(news || []);
  const [loading, setLoading] = useState(true); 

  const relodPost = (id) => {
    setArticles(news?.filter((news) => news._id !== id));
  };

  useEffect(() => {
    if (articles) {
      setLoading(false); 
    }
  }, [articles]);

  if (loading) {
    return <Loding/>;
  }

  return (
    <>
      <h2 className="my-10 text-2xl text-center font-bold sm:text-3xl">
        My Post
      </h2>
      <div className="container my-20 mx-auto flex flex-wrap gap-10 items-center justify-around">
        {articles?.map((data) => (
          <MyPostCard
            key={data._id}
            news={data}
            relodPost={relodPost}
          ></MyPostCard>
        ))}
      </div>
    </>
  );
};

export default MyPost;
