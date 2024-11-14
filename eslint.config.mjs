import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules:{
      "prefer-const":"error",
      // "no-const-assigned":"error",
      "no-var":'error',
      'no-new-object':'error',
      'object-shorthand':'error',
      'no-prototype-builtins':'error',
      'no-array-constructor':'error'
    }
  }
];