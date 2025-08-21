---
title: 链接
links:
  - title: GitHub
    description: GitHub 是全球最大的软件开发平台。
    website: https://github.com
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
menu:
    main: 
        weight: 4
        params:
            icon: link

comments: false
---

要使用此功能，请在 frontmatter 中添加 `links` 部分。

此页面的 frontmatter:

```yaml
links:
  - title: GitHub
    description: GitHub 是全球最大的软件开发平台。
    website: https://github.com
    image: https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png
  - title: TypeScript
    description: TypeScript 是编译为纯 JavaScript 的类型化 JavaScript 超集。
    website: https://www.typescriptlang.org
    image: ts-logo-128.jpg
```

`image` 字段接受本地和外部图像。