import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";

export default function About() {
   return (
      <>
         <div className="h-screen flex justify-center items-center" id="about">
            <div className="">
                           <div className="sec-title  text-center pb-10">
               <h2>
                  About <span>Me</span>
               </h2>
            </div>
            <div className="flex flex-col justify-center items-center ">
               <p className="max-w-[700px] text-center md:text-start leading-[2]">
                  I'm Hamdi, a data analyst with a business background and
                  strong command of the end-to-end <br /> data analysis process.
                  I'm skilled in Excel, SQL, Python, Pandas, and NumPy, and I
                  build clear, interactive dashboards using Power BI and
                  Tableau. I'm also confident in data cleaning, wrangling, KPI
                  reporting, and automating tasks using Python. I understand how
                  to turn complex data into actionable insights that support
                  better decision-making. In addition to my data expertise, I
                  have hands-on familiarity with React and Next.js, which helps
                  me collaborate effectively on data-driven web solutions. I
                  hold a Bachelor's degree in English Commerce from Menoufia
                  University, which strengthens my work with a solid foundation
                  in business and financial thinking.
               </p>
               <div className="flex justify-center items-center gap-10 mt-5">
                  <div className="buttons flex justify-center items-center gap-5">
                     <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[16px] py-3 px-4 rounded-[5px] flex justify-between gap-2 items-center">
                        <span>
                           <MdOutlineMailOutline className="h-5 w-5" />
                        </span>
                        <span className="text-nowrap">Email Me</span>
                     </button>
                     <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[16px] py-3 px-4 rounded-[5px] flex justify-between gap-2 items-center">
                        <span>
                           <BsWhatsapp className="h-5 w-5" />
                        </span>
                        <span className="text-nowrap">WhatsApp Me</span>
                     </button>
                  </div>
                  <div className="icons flex justify-center items-center gap-5 ">
                     <div className="cursor-pointer bg-[#0a66c2] p-3 rounded-full">
                        <a href="">
                           <FaLinkedinIn size={22} />
                        </a>
                     </div>
                     <div className="cursor-pointer bg-[#333333] p-3 rounded-full">
                        <a href="">
                           <TbBrandGithubFilled size={22} />
                        </a>
                     </div>
                     <div className="cursor-pointer bg-[#1877f2] p-3 rounded-full">
                        <a href="">
                           <FaFacebookF size={22} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </>
   );
}
