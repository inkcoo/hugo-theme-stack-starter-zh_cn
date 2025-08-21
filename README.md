# Hugo Stack 汉化主题 Cloudflare Pages 部署完整一键部署指南
本项目基于 CaiJimmy 开源的 `hugo-theme-stack-starter` 仓库，于 2025 年 8 月 21 日 20:30 进行克隆，并在此基础上完成汉化与优化，旨在为中文用户提供免费的cloudflare page部署的 Hugo Stack 主题网站。

## 目录
1. [准备工作](#准备工作)
2. [项目设置](#项目设置)
3. [Cloudflare Pages 部署](#cloudflare-pages-部署)
4. [目录结构详解](#目录结构详解)
5. [创建新文章](#创建新文章)
6. [常见问题](#常见问题)

## 准备工作

### 必需条件
- GitHub 账号
- Cloudflare 账号
- 域名（可选）

### 第一步：创建项目
1. 访问 [hugo-theme-stack-starter](https://github.com/CaiJimmy/hugo-theme-stack-starter)
2. 点击 "Use this template" > "Create a new repository"
3. 仓库名称：`你的博客名称`
4. 选择 "Public"
5. 点击 "Create repository from template"

## 项目设置

### 配置文件说明
所有配置文件位于 `config/_default/` 目录下：

1. `config.toml` 基础配置
2. `params.toml` 主题参数
3. `menu.toml` 导航菜单

## Cloudflare Pages 部署

### 步骤一：连接仓库
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择 "Pages"
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 选择你的 GitHub 仓库

### 步骤二：配置构建设置

在 Cloudflare Pages 的构建设置中填写：

```plaintext
项目名称：你的项目名称
生产分支：main
框架预设：None（不要选择 Hugo 预设）

构建命令：hugo --gc --minify
构建输出目录：public

环境变量：
HUGO_VERSION=0.148.2
HUGO_EXTENDED=true
```

重要提示：
- 不要使用 Hugo 框架预设，手动配置更可靠
- `HUGO_VERSION` 建议使用最新的稳定版本
- 确保 `baseurl` 配置正确

### 步骤三：高级设置(部署时添加了环境变量即可忽略)

在 "Environment variables" 下添加以下配置：

```plaintext
环境变量（All deployments）:
HUGO_VERSION: 0.148.2
HUGO_EXTENDED: true
```

## 目录结构详解

```
project-root/
├── archetypes/                 # 文章模板
│   └── default.md             # 默认模板
├── assets/                    # 资源文件
│   ├── icons/                # 图标文件
│   ├── img/                  # 图片文件
│   └── scss/                 # 自定义样式
├── config/                    # 配置文件夹
│   └── _default/             # 默认配置
│       ├── config.toml       # 主配置
│       ├── params.toml       # 参数配置
│       └── menu.toml         # 菜单配置
├── content/                   # 内容目录
│   ├── posts/                # 博客文章
│   ├── pages/                # 独立页面
│   └── categories/           # 分类页面
├── layouts/                   # 自定义布局
├── static/                    # 静态文件
│   ├── favicon.ico           # 网站图标
│   └── images/               # 图片资源
└── themes/                    # 主题目录
    └── hugo-theme-stack/     # Stack 主题
```

### 目录用途说明

1. `archetypes/`：
   - 新文章的模板
   - 使用 `hugo new posts/文章名.md` 时会用到

2. `assets/`：
   - 需要处理的资源文件
   - 支持 SCSS 编译
   - 图片可以被优化

3. `content/`：
   - 所有内容文件
   - `posts/` 存放博客文章
   - `pages/` 存放独立页面

4. `static/`：
   - 静态资源
   - 直接复制到最终网站
   - 适合放置图片、PDF等

## 创建新文章

使用以下命令创建新文章：

```bash
hugo new posts/my-first-post.md
```

文章前置参数示例：

```yaml
---
title: "我的第一篇文章"
description: "文章描述"
date: 2025-08-21
image: cover.jpg
categories:
    - 技术
    - 随笔
tags:
    - Hugo
    - 博客
---
```

## 常见问题

### 1. 部署失败
检查：
- 环境变量 `HUGO_VERSION` 是否正确设置
- 构建命令和输出目录是否正确
- 询问AI大模型

### 2. 图片显示问题
- 文章内图片放在 `static/` 目录
- 或使用 `assets/` 目录并用 Hugo 管道处理

## 更新主题
建议持续关注原作者主题仓库 [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack) 的更新，自行对应汉化更新。
