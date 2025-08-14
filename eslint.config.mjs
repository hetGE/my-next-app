import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import checkFile from "eslint-plugin-check-file";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    {
        extends: compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

        plugins: {
            "check-file": checkFile,
        },

        rules: {
            "max-len": ["error", { code: 140, tabWidth: 4, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
            "prefer-arrow-callback": ["error"],
            "prefer-template": ["error"],
            semi: ["error"],
            quotes: ["error", "double", { avoidEscape: true }],

            "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],

            "check-file/filename-naming-convention": [
                "error",
                {
                    "**/*.{js,jsx,ts,tsx}": "KEBAB_CASE",
                },
                {
                    ignoreMiddleExtensions: true,
                },
            ],

            "check-file/folder-naming-convention": [
                "error",
                {
                    // Allow Next.js special conventions: (groups), [dynamic], [[...optional]]
                    "app/**/\\(.*\\)": "NEXT_JS_APP_ROUTER_CASE",
                    "app/**/\\[.*\\]": "NEXT_JS_APP_ROUTER_CASE",
                    "app/**/_*": "NEXT_JS_APP_ROUTER_CASE",
                    // Allow temporary folders (for build process)
                    "app/**/*.tmp": "NEXT_JS_APP_ROUTER_CASE",
                    // Enforce kebab-case for regular folders
                    "app/**": "KEBAB_CASE",
                    "components/**": "KEBAB_CASE",
                    "hooks/**": "KEBAB_CASE",
                    "lib/**": "KEBAB_CASE",
                    "stores/**": "KEBAB_CASE",
                    "utils/**": "KEBAB_CASE",
                },
            ],
        },
    },
]);
