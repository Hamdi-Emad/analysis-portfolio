"use client";
import { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleStateChange = (state) => {
      setMenuOpen(state.isOpen);
   };

   const toggleMenu = () => {
      setMenuOpen((prev) => !prev);
   };

   return (
      <nav className="fixed top-0 left-0 right-0 w-full  bg-red-400 z-50 shadow-md nav-blur">
         <div className=" flex justify-between items-center px-5 md:px-10 2xl:px-7 py-4 container mx-auto ">
            <Link
               href="/"
               className={`text-4xl flex items-center space-x-3 rtl:space-x-reverse hover:text-[#00a8cd] self-center transition-all font-semibold whitespace-nowrap text-white`}
            >
               HE
            </Link>

            {/* زرار فتح القائمة */}
            <button
               onClick={toggleMenu}
               className="text-white p-2 rounded-md md:hidden hover:text-[#00a8cd] transition cursor-pointer"
            >
               <FaBars size={25}/>
            </button>

            {/* القائمة العادية في الديسكتوب */}

            <ul className="font-medium hidden md:flex  flex-col text-center p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
               <li>
                  <Link
                     href="/"
                     className="text-md block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                  >
                     Home
                  </Link>
               </li>
               {/* <li>
                  <Link
                     href="#about"
                     className={` text-md block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]`}
                  >
                     About
                  </Link>
               </li> */}
               <li>
                  <Link
                     href="#skills"
                     className="text-md block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                  >
                     Skills
                  </Link>
               </li>
               <li>
                  <Link
                     href="#projects"
                     className="text-md block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                  >
                     Projects
                  </Link>
               </li>
               <li>
                  <Link
                     href="#contact"
                     className="text-md block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </div>

         {/* القائمة الجانبية للموبايل */}
         <Menu
            right
            width={"100%"}
            isOpen={menuOpen}
            onStateChange={handleStateChange}
            className=" text-center"
         >
            <Link
               href="/"
               onClick={toggleMenu}
               className="menu-item hover:bg-[#00a8cd]"
            >
               Home
            </Link>
            {/* <Link
               href="#about"
               onClick={toggleMenu}
               className="menu-item hover:bg-[#00a8cd]"
            >
               About
            </Link> */}
            <Link
               href="#skills"
               onClick={toggleMenu}
               className="menu-item hover:bg-[#00a8cd]"
            >
               Skills
            </Link>
            <Link
               href="#projects"
               onClick={toggleMenu}
               className="menu-item hover:bg-[#00a8cd]"
            >
               Projects
            </Link>
            <Link
               href="#contact"
               onClick={toggleMenu}
               className="menu-item hover:bg-[#00a8cd]"
            >
               Contact
            </Link>
         </Menu>
      </nav>
   );
}
