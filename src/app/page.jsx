import About from "./_components/about";
import Contact from "./_components/contact";
import Landing from "./_components/landing";
import Projects from "./_components/projects";
import Skills from "./_components/skills";
import logoImage from "../../public/logo.png";

export const metadata = {
   title: "Hamdi Emad | Data Analyst Portfolio",
   description:
      "I'm Hamdi Emad, a data analyst skilled in Excel, SQL, Python, and Power BI. View my data analysis portfolio including dashboards, visualizations, and real-world insights.",
   keywords: [
      "Data Analyst",
      "Data Analysis Portfolio",
      "Data Analytics Projects",
      "Business Intelligence",
      "Data Visualization",
      "Excel",
      "SQL",
      "Python",
      "Pandas",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "Data Wrangling",
      "Data Interpretation",
      "Data Storytelling",
      "Dashboard Developer",
      "Data Enthusiast",
      "Freelance Data Analyst",
      "Junior Data Analyst",
      "Entry Level Data Analyst",
      "Data Insights",
      "Hamdi Emad",
      "Hamdi Emad Portfolio",
      "Data Analyst Egypt",
   ],
   authors: [
      { name: "Hamdi Emad", url: "https://analysis-portfolio.vercel.app/" },
   ],
   openGraph: {
      title: "Hamdi Emad | Data Analyst Portfolio",
      description:
         "Explore real-world data analysis projects by Hamdi Emad. Specializing in Excel, SQL, Python, Pandas, Power BI, and data visualization. Turning raw data into meaningful insights.",
      url: "https://analysis-portfolio.vercel.app",
      siteName: "Hamdi Emad | Data Analyst",
      images: [
         {
            url: logoImage,
            width: 1200,
            height: 630,
            alt: "Dashboard and Data Analysis Projects by Hamdi Emad",
         },
      ],
      locale: "en_US",
      type: "website",
   },
};

export default function Home() {
   return (
      <div className="home-holder">
         <div
            className="container mx-auto px-5 pb-10 md:px-10 2xl:px-7"
            id="home"
         >
            <Landing />

            {/* <About /> */}

            <Skills />

            <Projects />

            <Contact />
         </div>
      </div>
   );
}
