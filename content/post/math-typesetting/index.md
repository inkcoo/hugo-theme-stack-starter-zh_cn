---
title: 数学公式排版
description: 使用 KaTeX 进行数学公式排版
date: 2023-08-24 00:00:00+0000
math: true
---

Stack 内置支持使用 [KaTeX](https://katex.org/) 进行数学公式排版。

**默认情况下不全站启用，** 但您可以通过在 front matter 中添加 `math: true` 来为单个文章启用。或者您可以通过在 `config.toml` 的 `params.article` 部分添加 `math = true` 来全站启用。

## 行内数学公式

This is an inline mathematical expression: $\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…$

```markdown
$\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…$
```

## 块级数学公式

$$
    \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$

```markdown
$$
    \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$
```

$$
    f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$

```markdown
$$
    f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$
```