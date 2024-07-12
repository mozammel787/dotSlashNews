import { useEffect, useState } from "react";
import SingleCard from "../Components/Global/SingleCard";
import Loding from "../Components/Global/Loding";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`https://dotslashnews-backend.onrender.com/news`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);



  useEffect(() => {
    if (news) {
      setLoading(false); 
    }
  }, [news]);

  if (loading) {
    return <Loding/>;
  }


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter the data based on the search term
  const filteredData = news?.filter((item) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-5 sm:my-10 p-5 sm:p-0">
      <label className="max-w-lg mx-auto md:my-20 input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="container mx-auto my-10 flex flex-wrap gap-10 items-center  justify-around">
        {filteredData.map((item) => (
          <SingleCard key={item._id} news={item}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
