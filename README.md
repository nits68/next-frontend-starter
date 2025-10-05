# Next.js-frontend-starter

## 1. Projekt létrehozása

### 1.1 CMD ablakból a szülő mappa kiválasztása után

```
npx create-next-app@latest
```

Majd interaktív lépések

> What is your project named? projekt_neve<br>
> Would you like to use TypeScript? No / **Yes**<br>
> Would you like to use ESLint? No / **Yes**<br>
> Would you like to use Tailwind CSS? No / **Yes**<br>
> Would you like your code inside a `src/` directory? **No** / Yes<br>
> Would you like to use App Router? (recommended) No / **Yes**<br>
> Would you like to use Turbopack for `next dev`? No / **Yes**<br>
> Would you like to customize the import alias (`@/*` by default)? **No** / Yes<br>
> What import alias would you like configured? @/\*<br>

### 1.2 Configurációs állományok létrehozása, vagy másolása a .vscode mappába

.vscode/extensions.json (majd a felajánlott VS Code bővítmények telepítése)

```
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "csstools.postcss",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "nextpress.nextpress-snippets",
    "abdulowhab.json-to-ts-type"
  ]
}

```

.vscode/launch.json

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/next/dist/bin/next",
      "runtimeArgs": ["--inspect"],
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "action": "debugWithEdge",
        "killOnServerStop": true,
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "webRoot": "${workspaceFolder}"
      }
    }
  ]
}
```

.vscode/settings.json

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "editor.mouseWheelZoom": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": ["typescript", "react", "typescriptreact", "javascript", "javascriptreact"],
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.pruneOnFetch": true,
  "git.autofetch": true,
  "git.autofetchPeriod": 60,
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "javascript.preferences.importModuleSpecifier": "non-relative"
}

```

.vscode/tasks.json

```
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "dev",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "type": "npm",
      "script": "test",
      "group": {
        "kind": "test",
        "isDefault": true
      }
    }
  ]
}
```

### 1.3 Prettier és Eslint kiegészítők telepítése, beállítása, elemek (osztályok, property-k, importok) sorba rendezése
```
npm i -D prettier prettier-plugin-tailwindcss eslint-config-prettier eslint-plugin-react @trivago/prettier-plugin-sort-imports
```

**.prettierrc** állomány létrehozása(másolása) a projekt főkönyvtárába

```

{
    "singleQuote": false,
    "semi": true,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 100,
    "plugins": [
        "@trivago/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss"
    ],
    "importOrder": [
        "<THIRD_PARTY_MODULES>",
        "@/(.*)$",
        "^[./]"
    ],
    "importOrderSeparation": false,
    "importOrderSortSpecifiers": true,
    "tailwindStylesheet": "./app/globals.css"
}
```

Prettier scriptek hozzáadása a **package.json**-ba:

```
...
"scripts": {
  ...
  "format": "prettier --check --ignore-path .gitignore .",
  "format:fix": "prettier --write --ignore-path .gitignore ."
}
```

### 1.4 Eslint-FlatCompat konfiguráció felülírása

eslint.config.mjs

```
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
    rules: {
      "react/jsx-sort-props": [
        2,
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: false,
          multiline: "ignore",
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: false,
          locale: "auto",
        },
      ],
    },
  },
  prettier, // Make sure this is always the last element in the array.
];

export default eslintConfig;
```
[További opciók - GitHub link](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

### 1.5 Next.js konfigurálása: next.config.ts
Kép optimalizáció kikapcsolása, így bárhonnan tölthetünk le képeket (vagy meg kell adni a forrás URL-t):

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```


## 2. daisyUI telepítése
Teljesen Tailwind CSS alapú, "összefogja" Bootstrap szerűen a Tailwind osztályokat

```
npm i -D daisyui@latest
```

### 2.1 A "./app/global.css" bővítése, 3. sortól beállítások törlése

```
@import "tailwindcss";
@plugin "daisyui";
...
```

[daisyUI dokumentáció](https://daisyui.com/docs/intro/)


## 3. Axios telepítése
Backend API hívásokhoz, egyszerűbben használható, mint a beépített fetch()
```
npm install axios
```

## 4. A layout.tsx egyszerűsítése
```
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-frontend-starter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

## 5. A page.tsx egyszerűsítése
```
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello, world!</h1>
    </div>
  );
}
```