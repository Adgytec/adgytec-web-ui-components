module.exports = {
  printWidth: 120, // max 120 chars in line, code is easy to read
  useTabs: true, // use spaces instead of tabs
  tabWidth: 4, // "visual width" of of the "tab"
  trailingComma: "es5", // add trailing commas in objects, arrays, etc.
  semi: true, // add ; when needed
  singleQuote: false, // '' for stings instead of ""
  bracketSpacing: true, // import { some } ... instead of import {some} ...
  arrowParens: "always", // braces even for single param in arrow functions (a) => { }
  jsxSingleQuote: false, // "" for react props, like in html
  bracketSameLine: false, // pretty JSX
  endOfLine: "lf", // 'lf' for linux, 'crlf' for windows, we need to use 'lf' for git
};
