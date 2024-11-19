const sendIsDark = document.querySelector('.test');
import { useState } from "react";
import { NavLink } from "react-router-dom";
import moon from "../../assets/images/moon.png";
import sun from "../../assets/images/sun.png";

const Header = () => {

  const [darkMode , setDarkMode] =useState(false);
  const isDarkmod = ()=>{
      setDarkMode((prev)=> (prev = !prev))
      sendIsDark?.classList.toggle('dark')
  }
  return (
    <div className=" w-full h-52 flex justify-center items-center top-0 right-0 ">
        <div className='w-full h-16 sm:w-5/6 lg:w-2/3  p-2 flex justify-between  rounded-lg '>
          <div className="w-1/2 flex gap-2 ">
            <NavLink to='/BCPC_LINKS' className='w-1/3 h-full flex justify-center items-center text-xl hover:bg-gray-300 duration-500 dark:text-white dark:hover:bg-gray-500  '>Home</NavLink>
            <NavLink to='/blog' className='w-1/3 h-full flex justify-center items-center text-xl hover:bg-gray-300 duration-500 dark:text-white dark:hover:bg-gray-500  '>Blog</NavLink>
          </div>
            <div onClick={isDarkmod} className="w-16 h-full flex justify-center items-center cursor-pointer hover:bg-gray-300 duration-500 rounded-xl mr-4 dark:hover:hover:bg-gray-500 ">
              <img className="scale-110" src={darkMode ? sun : moon} />
            </div>
        </div>
    </div>
  )
}

export default Header
