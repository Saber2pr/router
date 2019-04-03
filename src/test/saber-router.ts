import { Router, dispatch, getState } from '../core/saber-router'

export function test_saber_router() {
  Router({
    '/': () => alert(getState()),
    '/home': () => alert(getState()),
    '/home/test': () => alert(getState()),
    '/project': () => alert(getState()),
    '/about': '/home'
  })
}

;(<any>window).goto = url => dispatch(url)
