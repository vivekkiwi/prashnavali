import capitalizeFirstLetter from "@/app/utils/capitalize-first-letter";
import parseSlug from "@/app/utils/parse-slug";
import Loans from "@/components/Loans";
import { seoSlugs } from "@/data/seoSlugs";
import { notFound } from "next/navigation";

export default async function LoansPage({ params }) {
  const { slug } = await params;

  // ✅ Validate slug exists in SEO list
  if (!seoSlugs?.includes(`/loans/${slug}`)) {
    return notFound();
  }

  const parsed = parseSlug(slug);
  if (!parsed) return notFound();

  const { intent, type, city } = parsed;
  const formattedType = type?.replace(/-/g, " ");
  const formattedCity =
    city?.charAt(0)?.toUpperCase() + city?.slice(1);
  const formattedIntent = intent?.replace(/-/g, " ");

  return (
    <Loans
      intent={formattedIntent}
      type={formattedType}
      city={formattedCity}
    />
  );
}

// 🔥 METADATA FUNCTION
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) return {};

  const { intent, type, city } = parsed;

  const formattedType = type.replace(/-/g, " ");
  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);
  const formattedIntent = intent?.replace(/-/g, " ") || "";

  return {
    title: `${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} | Apply Now`,
    description: `Get ${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} with lowest interest rates, fast approval, and minimal documentation.`,

    keywords: [
      `${formattedType} in ${formattedCity}`,
      `${intent} ${formattedType}`,
      `loan in ${formattedCity}`,
    ],

    openGraph: {
      title: `${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} | Apply Now`,
      description: `Get ${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} with lowest interest rates, fast approval, and minimal documentation.`,
      url: `https://www.ram-prashnavali.com/loans/${params.slug}`,
      siteName: "Ram Prashnavali",
      type: "website",
    },

    alternates: {
      canonical: `https://www.ram-prashnavali.com/loans/${params.slug}`,
    },

    twitter: {
      card: "summary_large_image",
      title: `${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} | Apply Now`,
      description: `Get ${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} with lowest interest rates, fast approval, and minimal documentation.`,
    },
  };
}
