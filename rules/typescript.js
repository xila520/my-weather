module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // interface 和type 成员需要特定的定界符
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    // 不使用require导入
    "@typescript-eslint/no-require-imports": "off",
    // 导出的类和公共函数上要显式的返回值和参数类型
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // 引号
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    // 分号
    "@typescript-eslint/semi": ["warn", "never"],
    // ts注释
    "@typescript-eslint/ban-ts-comment": "off",
    // 类型声明空格
    "@typescript-eslint/type-annotation-spacing": "error",

    // recommend rules

    // 要求成员重载是连续的
    "@typescript-eslint/adjacent-overload-signatures": "error",
    // 禁用某些类型，默认值Function Object
    "@typescript-eslint/ban-types": "off",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    // 禁止空函数
    "@typescript-eslint/no-empty-function": "off",
    // 禁止空接口
    "@typescript-eslint/no-empty-interface": "off",
    // 禁止使用any
    "@typescript-eslint/no-explicit-any": "off",
    // 禁止额外的非空断言
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    // 禁止多余的分号
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "off",
    // 禁止为初始化为数字，字符串或布尔型（无推断类型）的变量或参数进行显式类型声明。
    "@typescript-eslint/no-inferrable-types": "warn",
    // 强制对new和构造函数进行有效定义
    "@typescript-eslint/no-misused-new": "error",
    // 禁止使用自定义模块和命名空间，现在应该使用es6的导入导出
    "@typescript-eslint/no-namespace": "error",
    // 禁止在可选链中使用非空断言
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    // 禁止使用非空断言
    "@typescript-eslint/no-non-null-assertion": "off",
    // 禁止给this取别名
    "@typescript-eslint/no-this-alias": "off",
    // 禁止写未使用的变量
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // 禁止var 和 require
    "@typescript-eslint/no-var-requires": "off",
    // 偏好const
    "@typescript-eslint/prefer-as-const": "error",
    // 偏好namespace而不是module
    "@typescript-eslint/prefer-namespace-keyword": "error",
    // 不建议使用三斜杠引用类型指令以支持较新的导入样式
    "@typescript-eslint/triple-slash-reference": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-undef": "off",
    "no-redeclare": "off",

    "@typescript-eslint/member-ordering": "off",
  },
}
