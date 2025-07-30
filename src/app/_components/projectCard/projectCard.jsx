"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Slider from "../slider/slider";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ projectData }) {
   const [showAll, setShowAll] = useState(false);
   const visibleProjects = showAll ? projectData : projectData.slice(0, 6);
   return (
      <>
         <AnimatePresence>
            <motion.div
               layout
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "
            >
               {visibleProjects.map((project, i) => (
                  <motion.div
                     key={i}
                     className="skill-card p-[20px] shadow-lg group overflow-hidden"
                  >
                     <div className=" w-full relative h-[300px] overflow-hidden rounded-[12px]">
                        <a
                           href={project.link}
                           className="block"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <Slider images={project.images} />
                        </a>
                        {/* <Image
                        priority
                        src={project.image}
                        fill
                        alt={project.title}
                        quality={100}
                        className="group-hover:scale-[1.1]  transition-all duration-[0.4s] rounded-[12px]"
                        /> */}
                     </div>
                     <div className="">
                        <h3 className="text-center pt-8 pb-6 px-4 text-2xl text-[#00e1ffe8] font-[700]">
                           {project.title}
                        </h3>
                        <p className="leading-[1.6] text-center px-6">
                           {project.description}
                        </p>
                     </div>
                     <div className="flex flex-wrap justify-center gap-2 pt-6">
                        {project.tools.map((tool, i) => (
                           <p
                              className="border-1 border-[#00e1ffe8] rounded-[10px] px-3 py-[3px] text-nowrap"
                              key={i}
                           >
                              {tool}
                           </p>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </AnimatePresence>
         <div className="flex justify-center items-center py-6">
            {showAll ? (
               <button
                  className="text-lg flex flex-nowrap justify-center items-center gap-2 bg-[#00a8cd] cursor-pointer hover:bg-[#009dcde8] transition rounded-[5px] py-2 px-5"
                  onClick={() => setShowAll((x) => !x)}
               >
                  <span>Show Less</span>
                  <span>
                     <MdKeyboardArrowUp size={22}/>
                  </span>
               </button>
            ) : (
               <button
                  className="text-lg flex flex-nowrap justify-center items-center gap-2 bg-[#00a8cd] cursor-pointer hover:bg-[#009dcde8] transition rounded-[5px] py-2 px-5"
                  onClick={() => setShowAll((x) => !x)}
               >
                  <span>Show More</span>
                  <span>
                     <MdKeyboardArrowDown size={22}/>
                  </span>
               </button>
            )}
         </div>
      </>
   );
}
