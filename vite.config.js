import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    host: true,
    https: {
      key: fs.readFileSync("./kermit-key.pem"),
      cert: fs.readFileSync("./pepe.pem"),
    },
  },
});
