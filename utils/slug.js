export const createSlug = (text) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const getIdFromSlug = (slug) => {
  if (!slug) return null;   // ⭐ error yahi fix karega

  const parts = slug.split("-");
  return parts[parts.length - 1];
};