import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function About() {
   return (
      <>
         <div className=" flex justify-center items-center" id="about">
            <div className="">
               <div className="sec-title  text-center pb-10">
                  <h2>
                     About <span>Me</span>
                  </h2>
               </div>
               <div className="flex flex-col justify-center items-center ">
                  <div className="max-w-[800] w-auto">
                     <p className="text-center md:text-start leading-[2]">
                        I'm Hamdi Emad, a data analyst with a business
                        background and strong command of the end-to-end data
                        analysis process. I'm skilled in Excel, SQL, Python,
                        Pandas, and NumPy, and I build clear, interactive
                        dashboards using Power BI and Tableau. I'm also
                        confident in data cleaning, wrangling, KPI reporting,
                        and automating tasks using Python. I understand how to
                        turn complex data into actionable insights that support
                        better decision-making. In addition to my data
                        expertise, I have hands-on familiarity with React and
                        Next.js, which helps me collaborate effectively on
                        data-driven web solutions. I hold a Bachelor's degree in
                        English Commerce from Menoufia University, which
                        strengthens my work with a solid foundation in business
                        and financial thinking.
                     </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10  w-full">
                     <div className="icons flex justify-center items-center gap-5 ">
                        <div className="cursor-pointer bg-[#0a66c2] rounded-full hover:bg-white hover:text-[#0a66c2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                           <a
                              href="https://www.linkedin.com/in/hamdi-emad1/"
                              target="_blank"
                              className="p-3 block"
                           >
                              <FaLinkedinIn size={22} />
                           </a>
                        </div>
                        <div className="cursor-pointer bg-[#333333] rounded-full hover:bg-white hover:text-[#333333] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                           <a
                              href="https://github.com/Hamdi-Emad"
                              target="_blank"
                              className="p-3 block"
                           >
                              <TbBrandGithubFilled size={22} />
                           </a>
                        </div>
                        <div className="cursor-pointer bg-[#1877f2]  rounded-full hover:bg-white hover:text-[#1877f2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                           <a
                              href="https://www.facebook.com/hamdi.emad.509/"
                              target="_blank"
                              className="p-3 block"
                           >
                              <FaFacebookF size={22} />
                           </a>
                        </div>
                        <div className="cursor-pointer bg-[#1877f2]  rounded-full hover:bg-white hover:text-[#1877f2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                           <a
                              href="tel:201212384862"
                              target="_blank"
                              className="p-3 block"
                           >
                              <IoCall size={22} />
                           </a>
                        </div>
                     </div>
                     <div className="buttons flex justify-center items-center gap-5 ">
                        <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[16px]  rounded-[5px] ">
                           <a
                              href="mailto:hamdi2002em@mail.com"
                              // href="https://mail.google.com/mail/?view=cm&fs=1&to=hamdi2002em@mail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex justify-between gap-2 items-center py-3 px-4"
                           >
                              <span>
                                 <MdOutlineMailOutline className="h-5 w-5" />
                              </span>
                              <span className="text-nowrap">Email Me</span>
                           </a>
                        </button>
                        <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[16px]  rounded-[5px] ">
                           <a
                              className="flex justify-between gap-2 items-center py-3 px-4"
                              href="https://wa.me/201212384862"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <span>
                                 <BsWhatsapp className="h-5 w-5" />
                              </span>
                              <span className="text-nowrap">WhatsApp Me</span>
                           </a>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
