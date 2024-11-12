module.exports = {
  root: true,
  extends: [],
  ignorePatterns: [
    'dist/',
    '.next/',
    'node_modules/',
    '**/firebase-messaging-sw.js',
  ],
  plugins: ['@nx'],
  overrides: [
    {
      plugins: [
        'import',
        '@typescript-eslint',
        'react',
        '@stylistic',
        'prettier',
        'sort-destructure-keys',
      ],
      extends: [
        'plugin:@nx/javascript',
        'plugin:@nx/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'prettier',
      ],
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'import/no-unresolved': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'type',
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling'],
              'index',
            ],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
        'no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: false,
          },
        ],
        'prettier/prettier': 'error',
        'react/jsx-handler-names': [
          'error',
          {
            eventHandlerPrefix: 'on|handle',
            eventHandlerPropPrefix: 'on',
          },
        ],
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            ignoreCase: true,
            multiline: 'last',
            reservedFirst: ['key'],
            shorthandFirst: true,
          },
        ],
        'sort-destructure-keys/sort-destructure-keys': [
          'error',
          {
            caseSensitive: true,
          },
        ],
        '@stylistic/comma-dangle': ['error', 'only-multiline'],
      },
    },
  ],
};
