import DataDynamic from "./dateDynamic/dataDynamic";

export default function Footer() {
   return (
      <footer className="mt-0 p-5 bg-gradient-to-b from-transparent to-[#0ab7ec0e] footer-card">
         <div className="mx-auto max-w-screen-xl text-center">
            <a
               href="https://www.linkedin.com/in/hamdi-emad1/"
               target="_blank"
               className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
               <span className="text-[35px]">
                  <span className="text-[#0ab8ece8]">H</span>amdi
                  <span className="text-[#0ab8ece8]"> E</span>mad
               </span>
            </a>
            <p className="my-6 text-gray-300 leading-[1.8]">
               Designed and developed by Hamdi Emad — fueled by coffee and
               crafted with love ☕❤️
            </p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
               <li>
                  <a
                     href="#"
                     className="mr-4 hover:text-[#0ab8ece8] transition-all md:mr-6 "
                  >
                     Home
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="mr-4 hover:text-[#0ab8ece8] transition-all md:mr-6"
                  >
                     Skills
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="mr-4 hover:text-[#0ab8ece8] transition-all md:mr-6 "
                  >
                     Projects
                  </a>
               </li>
               <li>
                  <a
                     href="#"
                     className="mr-4 hover:text-[#0ab8ece8] transition-all md:mr-6"
                  >
                     Contact
                  </a>
               </li>
            </ul>
            <span className="text-sm sm:text-center text-gray-400">
               All rights reserved © <DataDynamic/>
            </span>
         </div>
      </footer>
   );
}
