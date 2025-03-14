import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/movies", changefreq: "weekly", priority: 0.8 },
  { url: "/support", changefreq: "monthly", priority: 0.6 },
  { url: "/subscription", changefreq: "monthly", priority: 0.6 },
  

  { url: "/movies/1", changefreq: "weekly", priority: 0.7 },
  { url: "/shows/1", changefreq: "weekly", priority: 0.7 },
];

const stream = new SitemapStream({ hostname: "https://movienest-app.vercel.app" });

const writeStream = createWriteStream("./public/sitemap.xml");
stream.pipe(writeStream);

links.forEach(link => stream.write(link));

stream.end();

console.log("✅ Sitemap generated successfully!");
