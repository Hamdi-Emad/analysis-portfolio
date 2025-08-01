"use client";

import { FileUser, Send } from "lucide-react";
import Typewriter from "typewriter-effect";
import landingImage from "../../../public/Analysis-pana2.png";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandGithubFilled, TbBrandGmail } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Landing() {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: true,
      });
   }, []);
   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen overflow-hidden">
            <div className="w-full text-sec flex justify-center items-center ">
               <div className=" w-full">
                  {/* <h1 className="text-3xl lg:text-6xl text-center md:text-start text-white font-bold">
                     <span className="block text-4xl md:text-5xl  text-[#ffffffc7]">
                        Hello, I'm
                     </span>
                     <span className="text-4xl lg:text-7xl block py-10 text-[#00a8cd]">
                        Hamdi Emad
                     </span>
                     <span className=" block text-4xl md:text-5xl pb-10 text-nowrap">
                        <Typewriter
                           options={{
                              strings: ["DATA ANALYST"],
                              autoStart: true,
                              loop: true,
                              delay: 100,
                              cursor: "_",
                              deleteSpeed: 50,
                           }}
                        />
                     </span>
                  </h1> */}

                  <h1
                     className="text-3xl lg:text-6xl text-center md:text-start text-white font-bold"
                     data-aos="slide-down"
                     data-aos-duration="4000"
                  >
                     Hi, I'm <span className="text-[#00a8cd]">Hamdi</span>
                     <span className="text-4xl lg:text-7xl block py-10 text-nowrap transition-all">
                        <Typewriter
                           options={{
                              strings: ["DATA ANALYST"],
                              autoStart: true,
                              loop: true,
                              delay: 100,
                              cursor: "",
                              deleteSpeed: 70,
                           }}
                        />
                     </span>
                  </h1>
                  <div
                     className="flex flex-col md:flex-row gap-3  items-center "
                     data-aos="slide-up"
                  >
                     <a
                        href="https://www.linkedin.com/in/hamdi-emad1/"
                        target="_blank"
                        className="w-full flex justify-center md:w-auto"
                     >
                        <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[20px] py-3 px-4 rounded-[5px] flex justify-between gap-2 items-center">
                           <span>
                              <FileUser size={23} />
                           </span>
                           <span className="text-nowrap">View Resume</span>
                        </button>
                     </a>
                     <a
                        href="#contact"
                        className="w-full flex justify-center md:w-auto"
                     >
                        <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[20px] py-3 px-4 rounded-[5px] flex justify-between gap-2 items-center">
                           <span>
                              <Send size={23} />
                           </span>
                           <span className="text-nowrap">Contact Me</span>
                        </button>
                     </a>
                  </div>
                  <div
                     className="icons flex flex-wrap justify-center md:justify-start ps-1  items-center gap-5 mt-9"
                     data-aos="slide-right"
                     data-aos-duration="5000"
                  >
                     <div className="cursor-pointer bg-[#00a8cd] rounded-full hover:bg-white hover:text-[#0a66c2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                        <a
                           href="https://www.linkedin.com/in/hamdi-emad1/"
                           target="_blank"
                           className="p-3 block"
                           rel="noopener noreferrer"
                        >
                           <FaLinkedinIn size={22} />
                        </a>
                     </div>
                     <div className="cursor-pointer bg-[#00a8cd] rounded-full hover:bg-white hover:text-[#333333] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                        <a
                           href="https://github.com/Hamdi-Emad"
                           target="_blank"
                           className="p-3 block"
                           rel="noopener noreferrer"
                        >
                           <TbBrandGithubFilled size={22} />
                        </a>
                     </div>
                     <div className="cursor-pointer bg-[#00a8cd]  rounded-full hover:bg-white hover:text-[#1877f2] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                        <a
                           href="https://www.facebook.com/hamdi.emad.509/"
                           target="_blank"
                           className="p-3 block"
                           rel="noopener noreferrer"
                        >
                           <FaFacebookF size={22} />
                        </a>
                     </div>
                     <div className="cursor-pointer  bg-[#00a8cd]  rounded-full hover:bg-white hover:text-[#ea4335] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                        <a
                           href="https://mail.google.com/mail/?view=cm&fs=1&to=hamdi2002em@mail.com"
                           target="_blank"
                           className="p-3 block"
                           rel="noopener noreferrer"
                        >
                           <TbBrandGmail size={22} />
                        </a>
                     </div>
                     <div className="cursor-pointer bg-[#00a8cd]  rounded-full hover:bg-white hover:text-[#25d366] transition hover:scale-[1.1] hover:rotate-[360deg] duration-[0.5s] ">
                        <a
                           href="https://wa.me/201212384862"
                           target="_blank"
                           className="p-3 block"
                           rel="noopener noreferrer"
                        >
                           <BsWhatsapp size={22} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full image-sec md:flex justify-center items-center overflow-hidden hidden">
               <div
                  className="w-full h-[300px] md:h-[1000px] lg:h-screen flex justify-center items-center relative "
                  data-aos="slide-left"
               >
                  <Image
                     quality={100}
                     fill
                     className="object-contain"
                     src={landingImage}
                     alt=""
                  />
               </div>
            </div>
         </div>
      </>
   );
}
