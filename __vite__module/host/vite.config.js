import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        remoteA: "http://localhost:8082/assets/usersEntry.js",
        externalType: "url",
        format: "vite",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
