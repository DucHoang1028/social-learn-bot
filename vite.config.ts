import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { componentTagger } from "lovable-tagger"; // Disabled to hide "Edit with Lovable" button

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // Removed componentTagger to hide Lovable button
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
