import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../Components/Global/SingleCard";
import Loding from "../Components/Global/Loding";

const Catagory = () => {
  const news = useLoaderData();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (news) {
      setLoading(false);
    }
  }, [news]);

  if (loading) {
    return <Loding />;
  }

  return (
    <>
      <div className="container mx-auto my-20 flex flex-wrap gap-10 items-center  justify-around px-5 md:px-0">
        {news?.map((data) => (
          <SingleCard key={data._id} news={data}></SingleCard>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </>
  );
};

export default Catagory;
