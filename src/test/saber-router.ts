import { Router } from '../core/saber-router'

export function test_saber_router() {
  Router([
    {
      path: 'home',
      callback: () => console.log('home')
    },
    {
      path: 'project',
      callback: () => console.log('project')
    },
    {
      path: 'about',
      callback: () => console.log('about')
    }
  ])
}
