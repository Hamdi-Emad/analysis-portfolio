import ProjectCard from "./projectCard/projectCard";

export default async function Projects() {
   const response = await fetch(
      "https://raw.githubusercontent.com/Hamdi-Emad/analysis-api/refs/heads/main/projects.json",
      { cache: "no-store" }
   );
   const data = await response.json();
   return (
      <>
         <div className="pt-40 " id="projects">
            <div>
               <div className="sec-title  text-center pb-10">
                  <h2>Projects</h2>
               </div>
               <div>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 "> */}
                  <ProjectCard projectData={data} />

                  {data.map((project, i) => (
                     // <div
                     //    key={i}
                     //    className="skill-card p-[20px] shadow-lg group overflow-hidden"
                     // >
                     //    <div className=" w-full relative h-[300px] overflow-hidden rounded-[12px]">
                     //       <a
                     //          href={project.link}
                     //          className="block"
                     //          target="_blank"
                     //          rel="noopener noreferrer"
                     //       >
                     //          <Slider images={project.images} />
                     //       </a>
                     //       {/* <Image
                     //          priority
                     //          src={project.image}
                     //          fill
                     //          alt={project.title}
                     //          quality={100}
                     //          className="group-hover:scale-[1.1]  transition-all duration-[0.4s] rounded-[12px]"
                     //       /> */}
                     //    </div>
                     //    <div className="">
                     //       <h3 className="text-center pt-8 pb-6 px-4 text-2xl text-[#00e1ffe8] font-[700]">
                     //          {project.title}
                     //       </h3>
                     //       <p className="leading-[1.6] text-center px-6">
                     //          {project.description}
                     //       </p>
                     //    </div>
                     //    <div className="flex flex-wrap justify-center gap-2 pt-6">
                     //       {project.tools.map((tool, i) => (
                     //          <p className="border-1 border-[#00e1ffe8] rounded-[10px] px-3 py-[3px] text-nowrap" key={i}>{tool}</p>
                     //       ))}
                     //    </div>
                     // </div>
                     <p className="pt-96 hidden" key={i}>
                        {project.title}
                     </p>
                  ))}
                  {/* </div> */}
               </div>
            </div>
         </div>
      </>
   );
}
