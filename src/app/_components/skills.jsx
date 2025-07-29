export default async function Skills() {
   const response = await fetch(
      "https://raw.githubusercontent.com/Hamdi-Emad/analysis-api/refs/heads/main/skill.json"
   );
   const data = await response.json();
   console.log(data)
   return (
      <>
         <div className="pt-40 flex justify-center items-center" id="skills">
            <div>
               <div className="sec-title  text-center pb-10">
                  <h2>Skills</h2>
               </div>
            </div>
         </div>
      </>
   );
}
