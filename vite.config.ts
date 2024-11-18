import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: "BCPC_LINKS",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
