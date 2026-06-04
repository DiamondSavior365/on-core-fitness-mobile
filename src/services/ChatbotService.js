import { supabase } from "../lib/supabaseClient";

export async function sendChatMessage(message, history = []) {
  const { data, error } = await supabase.functions.invoke("oncore-chatbot", {
    body: {
      message,
      history,
    },
  });

  if (error) {
    console.log("Chatbot function error:", error);
    throw new Error(error.message || "Failed to contact On Core Coach.");
  }

  if (!data?.success) {
    throw new Error(data?.error || "On Core Coach could not respond.");
  }

  return data.reply;
}
