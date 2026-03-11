


const BASE_URL = "https://appy.trycatchtech.com/v3/maganlalchikki";

// Get Categories
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/category_list`, {
    cache: "no-store",
  });

  return res.json();
}

// Get Products By Category
export async function getProductsbyCategory(categoryId) {
  const res = await fetch(
    `${BASE_URL}/product_list?category_id=${categoryId}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

// About API
export async function getAbout() {
  const res = await fetch(`${BASE_URL}/about`, {
    cache: "no-store",
  });

  return res.json();
}