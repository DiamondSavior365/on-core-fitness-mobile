import { supabase } from "../lib/supabaseClient";

export async function fetchHealthArticles() {
  const { data, error } = await supabase.functions.invoke(
    "fetch-health-articles"
  );

  if (error) {
    console.log("Error fetching health articles:", error);
    throw error;
  }

  return data?.articles || [];
}

export async function fetchCuratedArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("is_active", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.log("Error fetching curated articles:", error);
    throw error;
  }

  return (data || []).map((article) => ({
    id: article.id,
    title: article.title,
    description: article.description,
    imageUrl: article.image_url,
    source: article.source,
    url: article.url,
    category: article.category,
    publishedAt: article.published_at,
    isFeatured: article.is_featured,
  }));
}
