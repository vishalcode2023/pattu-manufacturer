import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // Live domain used for canonicals, OG URLs, sitemap & schema.
  // Set SITE_URL=https://your-domain.com at build time (or VITE_SITE_URL in .env).
  const siteUrl = process.env.SITE_URL || env.SITE_URL || env.VITE_SITE_URL || "";

  return {
    plugins: [react(), tailwindcss()],
    define: siteUrl
      ? { "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl) }
      : {},
  };
});
