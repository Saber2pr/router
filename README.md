# @saber2pr/router

> react-router-dom.

> 支持 Router 嵌套.

> 重定向还在测试

```bash
# from npm
npm install @saber2pr/router

# from github
git clone https://github.com/Saber2pr/@saber2pr/router.git
```

---

# Feature

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

import { Route, Router, Link, Redirect } from '@saber2pr/router'

const App = (
  <Router>
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

    <Route path="/" component={() => <div>Hello World!</div>} />

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
