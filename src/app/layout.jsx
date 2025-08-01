import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./burger.css"; // هنعمل الملف ده دلوقتي
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Hamdi Emad | Data Analyst Portfolio",
   icons: {
      icon: "/favicon.ico",
   },
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
            url: "https://raw.githubusercontent.com/Hamdi-Emad/analysis-portfolio/refs/heads/main/public/logo.png",
            width: 1200,
            height: 630,
            alt: "Dashboard and Data Analysis Projects by Hamdi Emad",
         },
      ],
      locale: "en_US",
      type: "website",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className="scroll-smooth">
         <head>
            <link
               rel="stylesheet"
               href="https://unpkg.com/aos@next/dist/aos.css"
            />
            <meta
               name="google-site-verification"
               content="qJvhc4dQCZms9Rf3LO9J1c6HO3oSn2Dd-cLgQqRvjug"
            />
         </head>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#141819] page-holder `}
         >
            <Navbar />
            {children}
            <Footer />
            <Analytics />
         </body>
      </html>
   );
}
