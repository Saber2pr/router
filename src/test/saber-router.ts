import { Router } from '../core/saber-router'

export function test_saber_router() {
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
}
