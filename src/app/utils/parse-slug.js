// 🔥 Slug parser
function parseSlug(slug) {
  if (!slug) return null;

  const cleanSlug = slug?.toLowerCase()?.trim();
  const [beforeIn, city] = cleanSlug?.split("-in-");

  if (!beforeIn || !city) return null;

  const parts = beforeIn?.split("-");
  if (parts.length < 2) return null;

  const intent = parts?.[0];
  const type = parts?.slice(1)?.join("-");
  return { intent, type, city };
}

export default parseSlug;