/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import SingleCard from "../Components/Global/SingleCard";
import Loding from "../Components/Global/Loding";
import PlaceholderNewsList from "../assets/News.json";

const AllNews = () => {
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
    return <Loding />;
  }

  return (
    <>
      <h2 className="my-10 text-2xl text-center font-bold sm:text-3xl">
        All news
      </h2>
      <div className="container my-20 mx-auto flex flex-wrap gap-10 items-center justify-around px-5 md:px-0 ">
        {news?.map((data) => (
          <SingleCard key={data._id} news={data}></SingleCard>
        ))}
      </div>
    </>
  );
};

export default AllNews;
