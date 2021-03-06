# @saber2pr/router

[![npm](https://img.shields.io/npm/v/@saber2pr/router.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/router)

> react-router-dom by hooks api.

> 支持 Router 嵌套.

> 支持 browserHistory、hashHistory

```bash
# from npm
npm install @saber2pr/router

# from github
git clone https://github.com/Saber2pr/@saber2pr/router.git
```

## 关于 Keep-Alive

> 原理 display none. 切换路由不会销毁 DOM 实例。

```tsx
export function KAlive({ children: C, isShow = 'none' }: KAliveProps) {
  const ref = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    ref.current.style.display = isShow
  }, [isShow])

  return <div ref={ref}>{C}</div>
}
```

## 与 Keep-Alive 有关的属性

- cache:boolean

```tsx
// 添加 cache 标记
<Router cache>
  <Route component={() => <div>1</div>} />
  <Route component={() => <div>2</div>} />
</Router>
```

- keep-live 会造成初始化 url 异常

---

# Feature

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Route, Router, Link, Redirect } from '@saber2pr/router'
import { browserHistory, hashHistory } from '@saber2pr/router'

const App = (
  <Router history={browserHistory}>
    <header>head</header>

    <nav>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>

        <li>
          <Link to="/blog">blog</Link>
        </li>

        <li>
          <Link to="/about">about</Link>
        </li>

        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </nav>

    <Route default path="/" component={() => <div>Hello World!</div>} />

    <Route path="/home" component={() => <div>home</div>} />
    <Route path="/blog" component={() => <div>blog</div>} />
    <Route path="/about" component={() => <div>about</div>} />

    <Route component={() => <h1>404 not Found</h1>} />

    <Redirect from="/" to="/home" />

    <footer>footer</footer>
  </Router>
)

ReactDOM.render(App, document.querySelector('#root'))
```

## usePush

```ts
import { usePush } from '@saber2pr/router'

const [push, getCurrentHref] = usePush()

push('/home')

getCurrentHref() // '/home'
```

---

# Dev

> need server.

## start

```bash
npm install
```

```bash
npm start

npm run dev

npm run serve

```

---

> Author: saber2pr
