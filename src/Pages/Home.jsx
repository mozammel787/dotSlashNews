import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Home/Hero";
import AllCards from "../Components/Global/AllCards";
import Homebusiness from "../Components/Home/Homebusiness";
import HomeSport from "../Components/Home/HomeSport";
import HomeOuther from "../Components/Home/HomeOuther";
import HeadNews from "../Components/Home/HeadNews";
import { useEffect, useState } from "react";
import Loding from "../Components/Global/Loding";


const Home = () => {

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
    <div className="container mx-auto">
      <HeadNews news={news} />
      <Hero news={news} />
      <AllCards news={news} />
      <Homebusiness news={news} />
      <HomeSport news={news} />
      <HomeOuther news={news} />
    </div>
  );
};

export default Home;
