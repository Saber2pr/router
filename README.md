# saber-router

[![npm](https://img.shields.io/npm/v/saber-router.svg?color=blue)](https://www.npmjs.com/package/saber-router)

> router for SPA.

```bash
# from npm
npm install saber-router

# from github
git clone https://github.com/Saber2pr/saber-router.git
```

# For Example

```ts
useRoutes({
  '/': () => alert(getHref()),
  '/home': () => alert(getHref()),
  '/home/test': () => alert(getHref()),
  '/project': () => alert(getHref())
})

useRoutes('/about', '/home')

// cancel use the routes:
useRoutes('/about', '/home')()
```

# For React

```tsx
<Anchor href="/home">home</Anchor>

// if use hooks, you should use useEffect to cleanup the subscribptions.
useEffect(() =>
  useRoutes({
    '/': () => alert(getHref()),
    '/home': () => alert(getHref()),
    '/home/test': () => alert(getHref()),
    '/project': () => alert(getHref())
  })
)

// from array reduce

type route = '/about' | '/blog' | '/' | '/links'

const routes: route[] = ['/', '/blog', '/about', '/links']

const Main = () => {
  const [state, setState] = useState<route>('/')
  useEffect(() =>
    useRoutes(
      routes.reduce(
        (out, cur) => ({
          ...out,
          [cur]: () => setState(cur)
        }),
        {}
      )
    )
  )
  switch (state) {
    case '/about':
      return <About />
    case '/blog':
      return <Blog />
    case '/':
      return <Home />
    case '/links':
      return <Link />
    default:
      return <h1>404</h1>
  }
}
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

npm run serve
```

> Author: saber2pr
