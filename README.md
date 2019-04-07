# saber-router

[![npm](https://img.shields.io/npm/v/saber-router.svg?color=blue)](https://www.npmjs.com/package/saber-router)

> router for SPA.

```bash
# from npm
npm install saber-router

# from github
git clone https://github.com/Saber2pr/saber-router.git
```

# API

## useRoute

监听一个 url

参数：useRoute(url, callback)

返回值：Function，执行后取消对该 url 的监听

```js
// 监听url: '/home'
const unUseRoute = useRoute('/home', () => alert('home'))
// 取消对'/home'的监听
unUseRoute()
```

## useRoutes

监听一组 url

参数：useRoutes(obj)，obj 属性是 url，值是 callback

返回值：Function，执行后取消对该组 url 的监听

```js
const unUseRoutes = useRoutes({
  '/': () => alert(getHref()),
  '/home': () => alert(getHref()),
  '/home/test': () => alert(getHref()),
  '/project': () => alert(getHref()),
  '/about': () => alert(getHref())
})
// 取消监听
unUseRoutes()
```

## push

发射路由事件

参数： push(url)或 push(url, data)，第二个参数可以在 callback 参数中获取

```js
push('/home')

push('/home', 'hello')
```

## getHref

获取当前 url

```js
push('/home')

getHref() // '/home'
```

# For React

```tsx
<Anchor href="/home">home</Anchor>

// if use hooks, you should use useEffect to cleanup the subscribptions.
useEffect(() =>
  useRoutes({
    '/': () => {},
    '/home': () => {},
    '/home/test': () => {},
    '/project': () => {}
  })
)
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
