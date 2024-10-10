
import Hero from "../Components/Home/Hero";
import AllCards from "../Components/Global/AllCards";
import Homebusiness from "../Components/Home/Homebusiness";
import HomeSport from "../Components/Home/HomeSport";
import HomeOuther from "../Components/Home/HomeOuther";
import HeadNews from "../Components/Home/HeadNews";
import { useEffect, useState } from "react";
import Loding from "../Components/Global/Loding";
import PlaceholderNewsList from "../assets/News.json";


const Home = () => {
  const [loading, setLoading] = useState(true);
  // const news = useLoaderData();
  const [news, setNews] = useState(PlaceholderNewsList);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dotslashnews-backend.onrender.com/news`
        );
        const data = await response.json();
        setNews(data); // Replace placeholder with real data
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProducts();
  }, []);


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
