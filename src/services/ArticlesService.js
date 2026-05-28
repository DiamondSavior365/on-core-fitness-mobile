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
