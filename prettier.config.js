module.exports = {
  singleQuote: true,
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx'],
};
