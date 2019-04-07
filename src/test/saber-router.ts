import { useRoutes, push, getHref } from '../core/saber-router'

export function test_saber_router() {
  useRoutes({
    '/': () => alert(getHref()),
    '/home': () => alert(getHref()),
    '/home/test': () => alert(getHref()),
    '/project': () => alert(getHref()),
    '/about': () => alert(getHref())
  })
  push('/home')
}

;(<any>window).goto = url => push(url)
