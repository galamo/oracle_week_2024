import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "employees",
      filename: "employeesEntry.js",
      exposes: {
        "./Employees": "./src/employees/index.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
});

// "./Employees": "./src/employees/index.tsx",
