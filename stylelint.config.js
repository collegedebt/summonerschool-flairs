/** @type {import('stylelint').Config} */
export default {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-html/svelte"
    ],
    plugins: [
        "@stylistic/stylelint-plugin"
    ],
    rules: {
        "color-hex-length": "short",
        "declaration-block-no-duplicate-properties": true,

        "@stylistic/block-opening-brace-newline-after": "always",
        "@stylistic/block-closing-brace-newline-before": "always",
        "@stylistic/declaration-colon-space-after": "always",
        "@stylistic/declaration-block-semicolon-newline-after": "always",

        "declaration-block-single-line-max-declarations": 0,
        "declaration-empty-line-before": "never",
        "rule-empty-line-before": "always"
    }
};