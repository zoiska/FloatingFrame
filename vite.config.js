import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  server: {
    host: true,
    https: {
      key: fs.readFileSync("../192.168.1.110-key.pem"),
      cert: fs.readFileSync("../192.168.1.110.pem"),
    },
  },
});
