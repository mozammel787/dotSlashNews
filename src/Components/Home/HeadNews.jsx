/* eslint-disable react/prop-types */


const HeadNews = ({news}) => {

    return (
        <div className=" bg-black   flex items-center my-5">
            <p className="text-xl lg:text-3xl font-bold text-white p-4 flex items-center gap-4">
            <span className="relative flex-shrink-0 w-3 h-3 rounded-full bg-red-700 mt-1">
						<span className="absolute flex-shrink-0 w-5 h-5 rounded-full -left-1 -top-1 animate-ping bg-red-700"></span>
					</span>
                News:
            </p>
            <div className="  text-white overflow-x-hidden "> 
            <div className=" flex flex-nowrap shrink-0 items-center hade-line-anemation">

           
            {
                    news?.map((data)=>(
                        <h2 className="text-nowrap text:md lg:text-xl  " key={data._id} > {data.title}   . /    </h2>
                    ))
                }
            {
                    news?.map((data)=>(
                        <h2 className="text-nowrap text:md lg:text-xl " key={data._id} > {data.title}   . /    </h2>
                    ))
                }
        </div>
        </div>
        </div>
    );
};

export default HeadNews;