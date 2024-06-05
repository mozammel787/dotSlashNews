/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SingleCard from "../Components/Global/SingleCard";
import { useLoaderData } from "react-router-dom";
import Loding from "../Components/Global/Loding";

const AllNews = () => {
  const [loading, setLoading] = useState(true); 
  const news = useLoaderData(); 

  useEffect(() => {
    if (news) {
      setLoading(false); 
    }
  }, [news]);

  if (loading) {
    return <Loding/>;
  }

  return (
    <>
      <h2 className="my-10 text-2xl text-center font-bold sm:text-3xl">
        All news
      </h2>
      <div className="container my-20 mx-auto flex flex-wrap gap-10 items-center justify-around px-5 md:px-0 ">
        {news?.map((data) => (
          <SingleCard
            key={data._id}
            news={data}
            
          ></SingleCard>
        ))}
      </div>
    </>
  );
};

export default AllNews;
