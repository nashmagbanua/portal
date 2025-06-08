import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// SPA fallback plugin para gumana ang nested routes sa Vercel
const spaFallback = () => ({
  name: 'spa-fallback',
  configureServer(server) {
    server.middlewares.use((_, res, next) => {
      res.setHeader('Cache-Control', 'no-store');
      next();
    });
  }
});

export default defineConfig(({ mode }) => ({
  base: "/", // Required for React Router in Vercel
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    spaFallback(),
    mode === 'development' && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
