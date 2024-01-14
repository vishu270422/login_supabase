import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gziltwxqkiytqizdupre.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6aWx0d3hxa2l5dHFpemR1cHJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNjQ4MDUsImV4cCI6MjAyMDY0MDgwNX0.KE_X9UJ4Qg61FpQp47sRjsAvppgQpeZ5-kp-Lq-xEBI";
export const supabase = createClient(supabaseUrl, supabaseKey);
