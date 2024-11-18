import { Link } from "react-router-dom";

const Card = ({title , img}) => {
  return (
    <Link className="w-72 h-80 lg:w-64 lg:h-72 md:w-54 md:h-64 m-4 bg-gray-100 flex flex-col border-solid border-4 border-gray-300 shadow rounded-xl duration-200 dark:bg-gray-700 hover:scale-105 hover:shadow-2xl ">
          <div className="w-full h-1/6 flex justify-center items-center p-2">
            <div className="font-semibold dark:text-white">
                {title}
            </div>
          </div>
          <div className="w-full h-5/6 flex justify-center items-center p-4">
           <img className="w-full h-full " src={img} alt="" /> 
          </div>  
    </Link>
  )
}

export default Card;