import Link from "next/link";
import MobileMenuToggle from "./mobileMenuToggle";

export default function Navbar() {
   return (
      <nav className=" border-gray-200 bg-[#141819] fixed w-full z-50 top-0 left-0 shadow-lg">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
               href="/"
               className="flex items-center space-x-3 rtl:space-x-reverse"
            >
               <span className="md:hover:text-[#00a8cd] self-center text-2xl transition-all font-semibold whitespace-nowrap text-white">
                  HE
               </span>
            </Link>

            {/* الزرار ده بقى Client بس */}
            <MobileMenuToggle />

            <div className="hidden w-full md:block md:w-auto" id="navbar-menu">
               <ul className="font-medium flex flex-col text-center p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 border-gray-700">
                  <li>
                     <Link
                        href="/"
                        className="block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                     >
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/about"
                        className="block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                     >
                        About
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/services"
                        className="block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                     >
                        Skills
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/pricing"
                        className="block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                     >
                        Projects
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/contact"
                        className="block py-2 px-3 rounded hover:bg-blue-700 md:hover:bg-transparent transition-all  md:p-0 text-white md:hover:text-[#00a8cd]"
                     >
                        Contact
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
