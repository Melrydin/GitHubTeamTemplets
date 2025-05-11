module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // Level: error
      'always', // Applicable: always
      [ // Allowed types
        'feat',
        'fix',
        'refactor',
        'perf',
        'style',
        'test',
        'docs',
        'build',
        'ops',
        'chore',
      ],
    ],
  },
};
