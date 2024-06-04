import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Home/Hero";
import AllCards from "../Components/Global/AllCards";
import Homebusiness from "../Components/Home/Homebusiness";
import HomeSport from "../Components/Home/HomeSport";
import HomeOuther from "../Components/Home/HomeOuther";
import HeadNews from "../Components/Home/HeadNews";


const Home = () => {
    const data = useLoaderData()
    
    return (
        <div className="container mx-auto">
            <HeadNews news={data}/>
            <Hero news={data}/>
            <AllCards news={data}/>
            <Homebusiness news={data}/>
            <HomeSport news={data}/>
            <HomeOuther news={data}/>
        </div>
    );
};

export default Home;