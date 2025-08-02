/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: "https://analysis-portfolio.vercel.app", // رابط موقعك الحقيقي
   generateRobotsTxt: true,
   sitemapSize: 7000,
   // مسارات ثابتة لو عندك:
   additionalPaths: async (config) => [
      { loc: "/", lastmod: new Date().toISOString() },
      { loc: "/skills", lastmod: new Date().toISOString() },
      { loc: "/projects", lastmod: new Date().toISOString() },
      { loc: "/contact", lastmod: new Date().toISOString() },
      // أضف باقي الصفحات لو عندك
   ],
};
