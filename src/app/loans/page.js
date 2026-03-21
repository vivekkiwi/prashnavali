import capitalizeFirstLetter from "@/app/utils/capitalize-first-letter";
import Loans from "@/components/Loans";

const DEFAULT_VALUES = {
  intent: "instant",
  type: "Loan",
  city: "India",
};

export default async function LoansPage() {
  const { intent, type, city } = DEFAULT_VALUES;
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
export async function generateMetadata() {
  const { intent, type, city } = DEFAULT_VALUES;
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
      url: `https://www.ram-prashnavali.com/loans`,
      siteName: "Ram Prashnavali",
      type: "website",
    },

    alternates: {
      canonical: `https://www.ram-prashnavali.com/loans`,
    },

    twitter: {
      card: "summary_large_image",
      title: `${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} | Apply Now`,
      description: `Get ${capitalizeFirstLetter(formattedIntent)} ${formattedType} in ${formattedCity} with lowest interest rates, fast approval, and minimal documentation.`,
    },
  };
}
