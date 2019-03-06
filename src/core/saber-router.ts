export interface Route {
  path: string
  callback(): void
}

export const Router = (Routes: Route[]) => {
  window.onhashchange = event => {
    const params = event.newURL.split('#')[1]
    Routes.find(route => route.path === params).callback()
  }
}
