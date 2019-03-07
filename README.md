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
Router([
  {
    path: '/',
    callback: () => alert('root')
  },
  {
    path: 'home',
    callback: () => alert('home')
  },
  {
    path: 'home/test',
    callback: () => alert('home/test')
  },
  {
    path: 'project',
    callback: () => alert('project')
  },
  {
    path: 'about',
    callback: () => alert('about')
  }
])
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
