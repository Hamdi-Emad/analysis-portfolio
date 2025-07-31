import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default async function Skills() {
   const response = await fetch(
      "https://raw.githubusercontent.com/Hamdi-Emad/analysis-api/refs/heads/main/skills.json",
      { cache: "no-store" }
   );
   const data = await response.json();
   return (
      <>
         <div className="pt-40" id="skills">
            <div>
               <div className="sec-title  text-center pb-10">
                  <h2>Skills</h2>
               </div>
               <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 ">
                     {data.map((skill, i) => (
                        <div
                           key={i}
                           className="skill-card p-5 shadow-lg group "
                        >
                           <div className="w-full h-40  flex justify-center items-center">
                              <Image
                                 src={skill.image}
                                 width={100}
                                 height={100}
                                 alt={skill.name}
                                 className="group-hover:scale-[1.2] transition-all duration-[0.4s] "
                              />
                           </div>
                           <div>
                              <h3 className="text-center py-3 text-2xl text-[#0ab8ece8] font-[700]">
                                 {skill.name}
                              </h3>
                              <div>
                                 <ul className="">
                                    {skill.details.map((item, i) => (
                                       <li
                                          className="flex items-start gap-1 py-3 my-2 hover:pl-2 md:hover:pl-3 transition-all hover:bg-[rgb(0,0,0,0.2)] rounded-lg duration-[0.3s] cursor-pointer"
                                          key={i + 100}
                                       >
                                          <span className=" shrink-0  md:pt-[0.5px]">

                                             <MdKeyboardDoubleArrowRight
                                                size={25}
                                                color="#009dcde8"
                                                className=""
                                             />
                                          </span>
                                          <span className="pt-[1px] md:pt-0 text-[15px] md:text-[17px] leading-[1.6]">
                                             {item}
                                          </span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
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
