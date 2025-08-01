import About from "./_components/about";
import Contact from "./_components/contact";
import Landing from "./_components/landing";
import Projects from "./_components/projects";
import Skills from "./_components/skills";

export default function Home() {
   return (
      <div className="home-holder">
         <div className="container mx-auto px-5 pb-10 md:px-10 2xl:px-7" id="home">
            <Landing />

            {/* <About /> */}

            <Skills />

            <Projects/>

            <Contact/>
         </div>
      </div>
   );
}
