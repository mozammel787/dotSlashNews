import { Outlet } from "react-router-dom";
import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";


const MainLayOut = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
            
        </>
    );
};

export default MainLayOut;