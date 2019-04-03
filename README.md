# saber-router

> router for SPA.

```bash
# from npm
npm install saber-router

# from github
git clone https://github.com/Saber2pr/saber-router.git
```

# For Example

```ts
createRouter({
  '/': () => alert('/'),
  '/home': () => alert('/home'),
  '/home/test': () => alert('/home/test'),
  '/project': () => alert('/project'),
  '/about': '/home'
})

dispatch('/about')

getState() // /about
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr
