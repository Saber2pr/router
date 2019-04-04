import { useRoutes, push, getHref } from '../core/saber-router'

export function test_saber_router() {
  useRoutes({
    '/': () => alert(getHref()),
    '/home': () => alert(getHref()),
    '/home/test': () => alert(getHref()),
    '/project': () => alert(getHref())
  })

  useRoutes('/about', '/home')
}

;(<any>window).goto = url => push(url)
