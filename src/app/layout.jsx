import "./globals.css";
import "./burger.css"; // هنعمل الملف ده دلوقتي
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

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
            {/* خطوط ومكتبات */}
            <link
               rel="stylesheet"
               href="https://unpkg.com/aos@next/dist/aos.css"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
               rel="stylesheet"
            />

            {/* التحقق من Google و Bing */}
            <meta
               name="google-site-verification"
               content="qJvhc4dQCZms9Rf3LO9J1c6HO3oSn2Dd-cLgQqRvjug"
            />
            <meta
               name="msvalidate.01"
               content="E72B61D55A3F9E12FE608312034CF8CC"
            />

            {/* 💡 إضافة مهمة لتحسين ظهور اسمك بدل Vercel */}
            <meta property="og:site_name" content="Hamdi Emad" />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: `
      {
         "@context": "https://schema.org",
         "@type": "WebSite",
         "name": "Hamdi Emad",
         "url": "https://analysis-portfolio.vercel.app"
      }
      `,
               }}
            />
         </head>
         <body className={` antialiased bg-[#141819] page-holder `}>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
         </body>
      </html>
   );
}
