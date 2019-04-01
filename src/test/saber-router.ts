import { Router } from '../core/saber-router'

export function test_saber_router() {
  Router({
    '/': url => alert(url),
    '/home': url => alert(url),
    '/home/test': url => alert(url),
    '/project': url => alert(url),
    '/about': '/home'
  })
}
