import { seoSlugs } from "@/data/seoSlugs";

export default function sitemap() {
    console.log(process.env.NODE_ENv, process.env.NEXT_PUBLIC_ENV);
  const baseUrl = "https://www.ram-prashnavali.com";

  return seoSlugs.map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
  }));
}