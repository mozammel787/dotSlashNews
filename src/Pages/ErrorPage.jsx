import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const {error , status} = useRouteError
    return (
        <div className="w-[100vw] h-[100vh] items-center flex flex-col justify-center ">
            <h1 className="text-7xl font-black my-8">Error {status 
            || 404}</h1>
            <p className="text-2xl ">{error?.message}</p>

            <button className="btn bg-black text-white ">
                <Link to="/">Go To Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;