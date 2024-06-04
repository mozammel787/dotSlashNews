/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


const HeadNews = ({news}) => {
    const [articles, setArticles] = useState(news || []);

    useEffect(() => {
      if (Array.isArray(news)) {
        // Sort the articles by publishedAt date
        const sortedArticles = [...news].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setArticles(sortedArticles);
      }
    }, [news]);
    return (
        <div className=" bg-black   flex items-center my-5">
            <p className="text-3xl font-bold text-white p-3 flex items-center gap-4">
            <span className="relative flex-shrink-0 w-3 h-3 rounded-full bg-white">
						<span className="absolute flex-shrink-0 w-5 h-5 rounded-full -left-1 -top-1 animate-ping bg-white"></span>
					</span>
                News:
            </p>
            <div className="  text-white overflow-x-hidden "> 
            <div className=" flex flex-nowrap shrink-0 items-center hade-line-anemation">

           
            {
                    articles.map((data)=>(
                        <h2 className="text-nowrap text-xl" key={data._id} > {data.title}   . /    </h2>
                    ))
                }
            {
                    articles.map((data)=>(
                        <h2 className="text-nowrap text-xl" key={data._id} > {data.title}   . /    </h2>
                    ))
                }
        </div>
        </div>
        </div>
    );
};

export default HeadNews;