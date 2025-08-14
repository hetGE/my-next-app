// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    printWidth: 120,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "es5",
    plugins: [
        "@trivago/prettier-plugin-sort-imports",
        "prettier-plugin-tailwindcss",
        "prettier-plugin-brace-style",
        "prettier-plugin-classnames",
        "prettier-plugin-merge",
    ],
    importOrder: ["^(react|next?/?([a-zA-Z/]*))$", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    braceStyle: "1tbs",
    customAttributes: ["class", "className", "style"],
    endingPosition: "absolute",
};

export default config;
