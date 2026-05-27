# 餐饮SaaS出海笔记

个人博客，专注于餐饮SaaS产品全球化 / 国际化 / 出海话题。

- **GitHub**: https://github.com/foolcar/tappo-saas-blog
- **线上地址**: https://foolcar.github.io/tappo-saas-blog/

## 技术栈

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3 + shadcn/ui
- react-markdown + remark-gfm
- react-router-dom v7 (HashRouter)
- react-syntax-highlighter

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 部署

通过 GitHub Actions 自动部署到 GitHub Pages。每次推送到 main 分支会自动触发构建和部署。
