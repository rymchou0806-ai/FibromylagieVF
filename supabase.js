
// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ⚠️ Mets ici tes propres infos Supabase
const SUPABASE_URL = "https://xrwjvjybhzcwtmrysesk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyd2p2anliaHpjd3RtcnlzZXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxODM1NjIsImV4cCI6MjA3Mjc1OTU2Mn0.QnxvgYwq6eelDW7V42cZhvNnNMSBCb1lwWBjXlW57oY"; 
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// 👉 Ajouter un score
export async function addScore(nom, prenom, score) {
  const { error } = await supabase.from("scores").insert([{ nom, prenom, score }]);
  if (error) {
    console.error("❌ Erreur insertion :", error);
  } else {
    console.log("✅ Score ajouté :", nom, prenom, score);
  }
}

// 👉 Récupérer les scores
export async function getScores() {
  const { data, error } = await supabase
    .from("scores")
    .select("*")
    .order("score", { ascending: false });

  if (error) {
    console.error("❌ Erreur récupération :", error);
    return [];
  } else {
    console.log("✅ Scores récupérés :", data);
    return data;
  }
}
