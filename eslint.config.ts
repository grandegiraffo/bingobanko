import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import vuePlugin from 'eslint-plugin-vue';
import globals from 'globals';

type FlatConfigItem = FlatConfig.Config;

const vueConfigs: FlatConfigItem[] = (vuePlugin.configs['flat/recommended']).map(
  (config): FlatConfigItem => ({
    ...config,
    languageOptions: {
      ...(config.languageOptions ?? {}),
      parserOptions: {
        ...(config.languageOptions?.parserOptions ?? {}),
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
  }),
);

const tsConfigs: FlatConfigItem[] = (tseslint.configs.recommendedTypeChecked as FlatConfigItem[]).map(
  (config): FlatConfigItem => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...(config.languageOptions ?? {}),
      parserOptions: {
        ...(config.languageOptions?.parserOptions ?? {}),
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }),
);

const config = [
  {
    ignores: ['dist', 'node_modules', 'coverage'],
  },
  js.configs.recommended,
  ...tsConfigs,
  ...vueConfigs,
  {
    files: ['src/**/*.{js,ts,vue}', 'vite.config.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
] satisfies FlatConfigItem[];

export default config;
