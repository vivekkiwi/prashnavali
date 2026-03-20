const types = ["personal-loan", "home-loan", "business-loan"];

const intents = [
  "instant",
  "low-interest",
  "quick",
  "urgent",
  "best",
  "fast-approval",
  "lowest-interest",
  "apply-online",
];

const cities = [
  "bangalore","delhi","mumbai","pune","hyderabad","chennai","kolkata",
  "ahmedabad","jaipur","lucknow","kanpur","nagpur","indore","bhopal",
  "patna","ludhiana","agra","nashik","vadodara","meerut","rajkot",
  "varanasi","srinagar","aurangabad","dhanbad","amritsar","allahabad",
  "ranchi","coimbatore","jabalpur","gwalior","vijayawada","madurai",
  "raipur","kota","guwahati","chandigarh","solapur","hubli","mysore",
  "tiruchirappalli","bareilly","aligarh","tiruppur","moradabad",
  "jalandhar","bhubaneswar","salem","warangal","guntur"
];

export const seoSlugs = [];

types.forEach((type) => {
  cities.forEach((city) => {
    intents.forEach((intent) => {
      seoSlugs.push(`/loans/${intent}-${type}-in-${city}`);
    });
  });
});