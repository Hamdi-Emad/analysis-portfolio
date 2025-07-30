import Image from "next/image";
import Slider from "./slider/slider";

export default async function Projects() {
   const response = await fetch(
      "https://raw.githubusercontent.com/Hamdi-Emad/analysis-api/refs/heads/main/projects.json",
      { cache: "no-store" }
   );
   const data = await response.json();
   return (
      <>
         <div className="pt-40" id="skills">
            <div>
               <div className="sec-title  text-center pb-10">
                  <h2>Projects</h2>
               </div>
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                     {data.map((project, i) => (
                        <div
                           key={i}
                           className="skill-card p-[000] shadow-lg group overflow-hidden"
                        >
                           <div className=" w-full relative h-[350px] overflow-hidden rounded-[12px]">
                              <a href="" className="block">
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
                              <h3 className="text-center pt-8 pb-6 px-4 text-2xl text-[#00e1ffe8] font-[700]">{project.title}</h3>
                              <p className="leading-[1.6] text-center px-6">{project.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
