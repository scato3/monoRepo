const baseConfig = require('../../.eslintrc.base.cjs');

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:@nx/react-typescript',
    'next',
    'next/core-web-vitals',
    ...baseConfig.extends,
  ],
  ignorePatterns: ['!**/*', '.next/**/*', ...baseConfig.ignorePatterns],
  overrides: [
    ...baseConfig.overrides,
    {
      parserOptions: {
        project: ['apps/my-app/tsconfig.json', 'apps/my-app/tsconfig.*?.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: false,
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@next/next/no-html-link-for-pages': ['error', 'apps/my-app/src/app'],
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
