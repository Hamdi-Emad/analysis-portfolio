"use client";

import { FileUser, Send } from "lucide-react";
import Typewriter from "typewriter-effect";
import landingImage from "../../../public/Analysis-pana2.png";
import Image from "next/image";

export default function Landing() {
   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
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

                  <h1 className="text-3xl lg:text-6xl text-center md:text-start text-white font-bold">
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
                  <div className="flex flex-col md:flex-row gap-3  items-center ">
                     <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[20px] py-3 px-4 rounded-[5px] flex justify-between gap-2 items-center">
                        <span>
                           <FileUser size={23} />
                        </span>
                        <span className="text-nowrap">View Resume</span>
                     </button>
                     <button className="bg-[#00a8cd] w-[60%] md:w-auto cursor-pointer hover:bg-[#009dcde8] transition text-[20px] py-3 px-4 rounded-[5px] flex justify-between gap-2 items-center">
                        <span>
                           <Send size={23} />
                        </span>
                        <span className="text-nowrap">Contact Me</span>
                     </button>
                  </div>
               </div>
            </div>
            <div className="w-full image-sec md:flex justify-center items-center overflow-hidden hidden">
               <div className="w-full h-[300px] md:h-[1000px] lg:h-screen flex justify-center items-center relative ">
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
