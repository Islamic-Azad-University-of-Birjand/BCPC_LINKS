import DataProvider from "@/context/DataProvider";
import { useContext} from "react";
import { Link } from "react-router-dom";
const Card = ({title , img ,imgDark , isdark }) => {
 const {isDark}=useContext(DataProvider);

  return (

    <Link className="w-42 h-56 lg:w-60 lg:h-68 md:w-54 sm:w-48 sm:h-60 md:h-64 m-4  flex flex-col-reverse bg-white bg-opacity-10 rounded-2xl shadow-md relative z-2 border border-opacity-30 backdrop-filter backdrop-blur-sm  duration-500 dark:bg-gray-600 hover:scale-105 hover:shadow-2xl active:scale-75 ">
          <div className="w-full h-1/6 flex justify-center items-center p-2">
            <div className="text-xl font-semibold pb-4 dark:text-white">
                {title}
            </div>
          </div>
          <div className="w-full h-5/6 flex justify-center items-center p-4">
            {isdark ? img : isDark ? imgDark : img }
          </div>  
    </Link>

  )
}

export default Card;
