import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			"no-undef": 'off',

			// 1. Naming consistency
			"no-var": "error",
			"prefer-const": "off",
			"camelcase": ["warn", { "properties": "never" }],

			// 2. Logical Guardrails
			"eqeqeq": ["error", "always"],
			"curly": ["error", "all"],
			"no-unneeded-ternary": "error",
			"no-confusing-arrow": "error",

			// 3. Syntax enforcement
			"prefer-template": "error",
			"object-shorthand": "error",
			"arrow-body-style": ["error", "as-needed"],
			// TODO: once project solidifies need to turn this to error.
			"@typescript-eslint/no-unused-vars": ["warn", {
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_"
			}],

			// 4. Svelte specific
			"svelte/html-quotes": ["error", { "prefer": "double" }],
			"svelte/no-at-html-tags": "error",
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
);
