import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        title({ entryName }) {
            const titles = {
                App: "Foo Page",
            };
            return titles[entryName];
        },
    },
    resolve: {
        alias: {
            "@assets": "./src/assets",
        },
    },
});
