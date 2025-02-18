import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        title: "Portofolio | Ignatius Odi",
    },
    resolve: {
        alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
        },
    },
    output: {
        distPath: {
            root: "build",
        },
    },
});
