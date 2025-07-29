import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  /*   server: {
    proxy: {
      "/api/v1": {
        target: "https://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  }, */
});
