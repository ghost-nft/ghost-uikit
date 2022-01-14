# Ghost UIkit

[![Version](https://img.shields.io/npm/v/@ghost-nft/ghost-uikit)](https://www.npmjs.com/package/@ghost-nft/ghost-uikit)

[![Size](https://img.shields.io/bundlephobia/min/@ghost-nft/ghost-uikit)](https://www.npmjs.com/package/@ghost-nft/ghost-uikit)

Ghost UIkit is a set of React components and hooks used to build pages on Ghost's apps.
It also contains a theme file for dark and light mode.

## Install

`yarn add @ghost-nft/ghost-uikit`

## Setup

### Theme

Before using Ghost UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@ghost-nft/ghost-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@ghost-nft/ghost-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
