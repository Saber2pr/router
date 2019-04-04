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

// if use hooks, you should use useEffect to cleanup the subscribptions.
useEffect(() =>
    useRoutes({
      '/': () => alert(getHref()),
      '/home': () => alert(getHref()),
      '/home/test': () => alert(getHref()),
      '/project': () => alert(getHref())
    })
  )
```

```tsx
<Anchor href="/home">home</Anchor>
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
