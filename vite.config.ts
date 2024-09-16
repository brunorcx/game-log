import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          // Define the index route
          route("/", "routes/_index.tsx", { index: true });

          // Define the game-form route with nested route
          route("game-form", "routes/game-form/GamePage.tsx", () => {
            route("", "routes/game-form/nested/nested.tsx", { index: true });
            route("nested2", "routes/game-form/nested/nested2.tsx");
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
