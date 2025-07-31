import About from "./_components/about";
import Landing from "./_components/landing";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

export default function Home() {
   return (
      <div className="home-holder">
         <div className="container mx-auto px-5 md:px-10 2xl:px-4" id="home">
            <Landing />

            <About />

            <Skills />

            <Projects/>
         </div>
      </div>
   );
}
