import { type Config } from "prettier";
// Trükk: A pluginok útvonalának feloldásához a "module" csomag kell
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const config: Config = {
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  plugins: [
    // Itt is kötelező a feloldás, különben a VS Code nem találja meg őket
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ["clsx"],
  tailwindStylesheet: "./app/globals.css",
};

export default config;