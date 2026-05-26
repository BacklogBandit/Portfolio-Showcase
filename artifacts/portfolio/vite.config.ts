import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;
const basePath = process.env.BASE_PATH || "/";
const isReplit = process.env.REPL_ID !== undefined;

export default defineConfig(async () => {
  const plugins = [
    react(),
    tailwindcss(),
  ];

  if (isReplit) {
    try {
      // @ts-ignore
      const runtimeErrorOverlay = await import("@replit/vite-plugin-runtime-error-modal").then(
        (m) => m.default || m,
      );
      plugins.push(runtimeErrorOverlay());

      if (process.env.NODE_ENV !== "production") {
        // @ts-ignore
        const { cartographer } = await import("@replit/vite-plugin-cartographer");
        // @ts-ignore
        const { devBanner } = await import("@replit/vite-plugin-dev-banner");

        plugins.push(
          cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
          devBanner(),
        );
      }
    } catch (e) {
      console.warn("Failed to load Replit plugins, skipping:", e);
    }
  }

  return {
    base: basePath,
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "src/assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: isReplit,
      host: "0.0.0.0",
      allowedHosts: true as const,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true as const,
    },
  };
});
