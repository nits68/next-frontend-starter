module.exports = {
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"), // mindig utolsó
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ["clsx"],
  tailwindStylesheet: "./app/globals.css",
};
