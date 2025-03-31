module.exports = {
  extends: ["plugin:react/recommended"],
  plugins: ["react", "react-hooks"],
  rules: {
    // 检查hook规则
    "react-hooks/rules-of-hooks": 2,
    // jsx key（除fragment缩写）
    "react/jsx-key": [
      1,
      {
        checkFragmentShorthand: false,
      },
    ],
    // 禁止在React组件定义中丢失displayName
    "react/display-name": 0,
    // 标签的child部分内的注释应放在大括号内
    "react/jsx-no-comment-textnodes": 2,
    // 不能有重复的props
    "react/jsx-no-duplicate-props": 2,
    // 禁止target="_blank"属性没有rel="noreferrer"
    "react/jsx-no-target-blank": 0,
    // 在JSX中禁止未声明的变量
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    // 禁止React被标记为未使用
    "react/jsx-uses-react": 0,
    // 禁止将JSX中使用的变量标记为未使用
    "react/jsx-uses-vars": 2,
    // 禁止将children通过props传递
    "react/no-children-prop": 2,
    // 禁止同时使用children和dangerouslySetInnerHTML
    "react/no-danger-with-children": 2,
    // 禁止使用不推荐的方法
    "react/no-deprecated": 1,
    // 禁止直接转换state应使用setState
    "react/no-direct-mutation-state": 2,
    // 禁止使用findDOMNode
    "react/no-find-dom-node": 2,
    // 禁止使用isMounted
    "react/no-is-mounted": 2,
    // 禁止使用React.render的返回值
    "react/no-render-return-value": 2,
    // 禁止为引用定义字符串，并禁止引用this.refs
    "react/no-string-refs": 2,
    // 检测未转义的HTML实体，这些实体可能表示格式错误的标签
    "react/no-unescaped-entities": 2,
    // 禁止使用未知的DOM属性
    "react/no-unknown-property": 2,
    // 禁止使用不安全的生命周期方法
    "react/no-unsafe": 2,
    // 禁止在使用jsx时忘记引入React
    "react/react-in-jsx-scope": 0,
    // render函数中要有返回
    "react/require-render-return": 2,
    // 禁止组件不声明类型
    "react/prop-types": 0,
    // conflict with prettier/jsxSingleQuote
    // 'jsx-quotes': ['error', 'prefer-single'],
  },
}
