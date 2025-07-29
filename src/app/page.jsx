import About from "./_components/about";
import Landing from "./_components/landing";

export default function Home() {
   return (
      <div className="home-holder">
         <div className="container mx-auto px-4" id="home">
            <Landing/>
            <About/>
         </div>
      </div>
   );
}
