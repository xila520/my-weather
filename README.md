# 🌤️ My Weather - React + TypeScript

> 使用 React + TypeScript 实现的单页天气应用，显示未来七天的天气情况，并支持切换城市。

## 🚀 功能特点

- 显示未来 **7 天内的天气和温度**
- 支持城市切换
- 实时获取天气数据（使用 [weatherapi](https://www.weatherapi.com/)）
- 基于 **React + TypeScript**
- 使用 `styleComponent` 美化样式

## 📸 页面效果预览

### ✅ 默认城市（上海）

![Weather](/src/public/screenshot.png)

## 🔧 项目运行

```bash
git clone <仓库地址>
cd  my-weather
npm install
npm start
```

## 📦 项目结构

```
/src
├── component # 组件目录
│ ├── WeatherCard.tsx # 天气卡片组件
│ ├── CityInput.tsx # 城市切换表单
│
├── api.ts # 天气 API 请求
├── types.ts # TypeScript 类型定义
├── App.tsx # 根组件
├── index.tsx # 入口文件
├── index.css # 全局样式
├── README.md # 项目说明文档
├── package.json # 项目配置
└── tsconfig.json # TypeScript 配置
```

## 🚦 常见问题

1. API 请求失败
   • 检查 api.ts 中 API Key 是否有效。
   • 确保网络环境可以访问 weatherapi。
2. 城市拼写错误
   • 如果 API 没有返回数据，可能是拼写问题。
   • 确保城市名拼写正确，例如：Beijing 而不是 Beijin。
