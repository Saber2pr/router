import { Router } from '../core/saber-router'

export function test_saber_router() {
  Router({
    '/': () => alert('/'),
    '/home': () => alert('/home'),
    '/home/test': () => alert('/home/test'),
    '/project': () => alert('/project'),
    '/about': '/home'
  })
}
