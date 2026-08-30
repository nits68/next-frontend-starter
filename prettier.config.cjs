module.exports = {
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"), // mindig utolsó
  ],
  tailwindFunctions: ["clsx"],
  tailwindStylesheet: "./app/globals.css",
};
