import { Link } from "react-router-dom"
import giticon from "@/assets/images/githubDark.png"
const Footer = () => {
  return (
    <div className="w-full h-16 flex p-2 bg-gray-800 mt-auto flex justify-center items-center text-white">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center gap-2">
          <span className="font-semibold text-white">Powered by :</span>
          <Link className=" flex flex justify-center items-center gap-2" to="https://github.com/Islamic-Azad-University-of-Birjand">
            <img className=" w-6 h-6 lg:w-8 lg:h-8" src={giticon} /> 
            <span>Islamic Azad University of Birjand</span>
          </Link>
        </div>
    </div>
  )
}

export default Footer