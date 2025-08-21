---
title: 图片画廊
description: 使用 Markdown 创建美丽的交互式图片画廊
date: 2023-08-26 00:00:00+0000
image: 2.jpg
---

Hugo Theme Stack 支持使用 Markdown 创建交互式图片画廊。它由 [PhotoSwipe](https://photoswipe.com/) 提供支持，其语法灵感来自 [Typlog](https://typlog.com/)。

要使用此功能，图片必须与 Markdown 文件位于同一目录中，因为它使用 Hugo 的页面束功能来读取图片的尺寸。**不支持外部图片。**

## 语法

```markdown
![Image 1](1.jpg) ![Image 2](2.jpg)
```

## 结果

![Image 1](1.jpg) ![Image 2](2.jpg)

> Photo by [mymind](https://unsplash.com/@mymind) and [Luke Chesser](https://unsplash.com/@lukechesser) on [Unsplash](https://unsplash.com/)