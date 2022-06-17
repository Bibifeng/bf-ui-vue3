/**
 * - 0: off
 * - 1: warn
 * - 2: error
 *
 * "parserOptions"：ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。
 * "parser"：ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
 * "env"：一个环境定义了一组预定义的全局变量
 * "globals"：如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。
 * "plugins"：ESLint 支持使用第三方插件
 * "rules"：ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则
 * "extends": 配置文件可以从基本配置扩展启用的规则集。有四种类型
 */

module.exports = {
    root: true,
    env: {
        // 指定代码的运行环境
        browser: true,
        node: true,
        es6: true,
    },
	parser: 'vue-eslint-parser', // 定义ESLint的解析器
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        // jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
	extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
	// plugins: ['@typescript-eslint'], // 定义了该eslint文件所依赖的插件
    rules: {
        'no-console': [1, { allow: ['warn', 'error', 'info'] }],
        'no-debugger': 1,
        semi: [2, 'always'],
        'vue/no-use-v-if-with-v-for': [2, { allowUsingIterationVar: false }],
        'comma-dangle': 0,
        'one-var': [
            1,
            {
                var: 'always',
                let: 'always',
                const: 'never',
            },
        ],
        'no-throw-literal': 0,
        'no-new-wrappers': 2,
        'no-useless-escape': 0,
        'no-redeclare': 2,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 1,
        'space-before-function-paren': [0, 'always'],
        'no-unused-vars': 2,
        'no-dupe-keys': 2,
        'no-func-assign': 2,
        'valid-typeof': 2,
        'no-shadow': 0,
        'no-prototype-builtins': 0,
        'no-undef': 0,
        'no-control-regex': 0,
        eqeqeq: [2, 'always'],
        'array-callback-return': 2,
    },
};
