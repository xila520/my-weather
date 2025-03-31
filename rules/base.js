module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    // 箭头函数参数括号
    "arrow-parens": ["off", "always"],
    // 括号换行样式
    "brace-style": ["error", "1tbs"],
    // 对象属性尾随逗号
    "comma-dangle": "off",
    // 遵守花括号规则
    curly: "error",
    // 换行样式lf or crlf
    "linebreak-style": "off",
    // new创建对象要使用括号
    "new-parens": "off",
    // 链式调用换行
    "newline-per-chained-call": "off",
    // 禁止console
    "no-console": ["error", { allow: ["info", "warn", "error", "debug"] }],
    // 禁止debugger
    "no-debugger": "error",
    // 禁止空的块语句
    "no-empty": "error",
    // 禁止使用eval
    "no-eval": "error",
    // 禁止不规则空格
    "no-irregular-whitespace": "off",
    // 禁止多个空行
    "no-multiple-empty-lines": "error",
    // 禁止使用原始包装器即String Number Boolean创建变量
    "no-new-wrappers": "error",
    // 禁止变量重复定义
    "no-redeclare": "error",
    // 禁止内部变量覆盖
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "all",
      },
    ],
    // 禁止行尾空格
    "no-trailing-spaces": "error",
    // 禁止用var声名变量
    "no-var": "error",
    // 偏向使用const
    "prefer-const": "error",
    // 对象属性名加引号
    "quote-props": "off",
    // 注释前要加空格
    "spaced-comment": [
      "warn",
      "always",
      {
        markers: ["/"],
      },
    ],
    // 使用isNaN判断
    "use-isnan": "error",
    // 文件末尾换行
    "eol-last": ["warn", "always"],
    // recommended rules
    // 校验cnstructor-super正确性
    "constructor-super": "error",
    // 校验for循环的方向
    "for-direction": "error",
    // getter中一定要return
    "getter-return": "error",
    // 禁止异步的promise excuter
    "no-async-promise-executor": "error",
    // 禁止在case中定义变量
    "no-case-declarations": "off",
    // 禁止修改类声明的变量
    "no-class-assign": "error",
    // 禁止跟-0比较
    "no-compare-neg-zero": "error",
    // 禁止在条件判断中赋值
    "no-cond-assign": "error",
    // 禁止给const赋值
    "no-const-assign": "error",
    // 禁止条件中使用常量
    "no-constant-condition": "error",
    // 禁止在正则中使用控制字符
    "no-control-regex": "warn",
    // 禁止delete
    "no-delete-var": "error",
    // 禁止重复的参数
    "no-dupe-args": "error",
    // 禁止重复的类成员
    "no-dupe-class-members": "error",
    // 禁止重复的esle-if
    "no-dupe-else-if": "error",
    // 禁止重复的key
    "no-dupe-keys": "error",
    // switch中不许有重复的case
    "no-duplicate-case": "error",
    // 禁止在正则中使用空字符串类
    "no-empty-character-class": "error",
    // 禁止使用空的解构模式
    "no-empty-pattern": "error",
    // 禁止给异常变量赋值
    "no-ex-assign": "error",
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": "error",
    // 禁止多余的分号
    "no-extra-semi": "error",
    // 禁止switch 中从一种case落入到另一种case
    "no-fallthrough": "error",
    // 对funciton赋值
    "no-func-assign": "error",
    // 对全局变量赋值
    "no-global-assign": "error",
    // 对import的变量赋值
    "no-import-assign": "error",
    // 禁止在嵌套的代码块中进行变量或函数声明
    "no-inner-declarations": "error",
    // 无效的正则
    "no-invalid-regexp": "error",
    // 禁止在字符类语法中使用由多个代码点组成的字符（Unicode包含由多个代码点组成的字符。RegExp字符类语法（/ [abc] /）无法处理由多个代码点组成的字符。）
    "no-misleading-character-class": "error",
    // 禁止混用空格和tab
    "no-mixed-spaces-and-tabs": "error",
    // 禁止使用new 创建symbol
    "no-new-symbol": "error",
    // 禁止将全局对象属性作为函数调用
    "no-obj-calls": "error",
    // 禁止在字符串文字中使用八进制转义序列
    "no-octal": "error",
    // 禁止直接使用对象实例上的Object.prototype内置函数（安全问题）
    "no-prototype-builtins": "error",
    // 禁止在正则中使用多个空格
    "no-regex-spaces": "error",
    // 禁止给自身赋值
    "no-self-assign": "error",
    // 禁止在setter中return
    "no-setter-return": "error",
    // 禁止覆盖全局对象
    "no-shadow-restricted-names": "error",
    // 禁止使用稀疏数组
    "no-sparse-arrays": "error",
    // 禁止在super之前调用this
    "no-this-before-super": "error",
    // 禁止使用未定义的变量
    "no-undef": "error",
    // 禁止混淆多行表达式
    "no-unexpected-multiline": "error",
    // 禁止无法访问的代码
    "no-unreachable": "error",
    // 禁止在finally中使用控制流语句
    "no-unsafe-finally": "error",
    // 禁止不安全的取反操作符
    "no-unsafe-negation": "error",
    // 禁止未使用的label
    "no-unused-labels": "error",
    // 禁止未使用的变量
    "no-unused-vars": "error",
    // 禁止不必要的catch语句
    "no-useless-catch": "error",
    // 禁止不必要的转义
    "no-useless-escape": "error",
    // 禁止使用with
    "no-with": "error",
    // 禁止使用没有yield的generator函数
    "require-yield": "error",
    // 验证typeof
    "valid-typeof": "error",
  },
}
