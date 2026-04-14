import { defineConfig } from "eslint/config";

import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";

export default defineConfig(
	eslint.configs.recommended,
	tsEslint.configs.recommendedTypeChecked,
	[
		{
			languageOptions: {
				parserOptions: {
					projectService: {
						allowDefaultProject: [
							"eslint.config.ts",
							"tsNodeESMRegister.mjs",
						],
					},
				},
			},
			rules: {
				quotes: [
					2,
					"double",
					{
						avoidEscape: true,
					},
				],

				semi: [2, "always"],
				"eol-last": [2, "always"],
			},
		},
	],
);
