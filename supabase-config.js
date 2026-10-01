/* ==========================================
   UTILITYBOX INDIA
   SUPABASE CONNECTION
   ========================================== */

const SUPABASE_URL = "https://ysaqupsxhqyzaxouzzrz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ENPxXB4xtEIPzpgy-25M_g_pD3WR2ZE";

if (
    !SUPABASE_URL ||
    SUPABASE_URL === "YOUR_SUPABASE_PROJECT_URL" ||
    !SUPABASE_PUBLISHABLE_KEY ||
    SUPABASE_PUBLISHABLE_KEY === "YOUR_SUPABASE_PUBLISHABLE_KEY"
) {

    console.warn(
        "UtilityBox: Supabase URL or publishable key is not configured."
    );

}


if (
    !window.supabase ||
    typeof window.supabase.createClient !== "function"
) {

    console.error(
        "UtilityBox: Supabase JavaScript library failed to load."
    );

} else if (
    SUPABASE_URL &&
    SUPABASE_PUBLISHABLE_KEY
) {

    const utilityBoxSupabase =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        );

    window.utilityBoxSupabase =
        utilityBoxSupabase;

    console.log(
        "UtilityBox: Supabase client connected."
    );

}
