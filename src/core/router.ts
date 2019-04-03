/*
 * @Author: saber2pr
 * @Date: 2019-04-03 15:50:57
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-03 15:50:57
 */
import { Observable } from 'saber-observable'

const historyObs = new Observable('')

window.onpopstate = event => historyObs.dispatch(event.state)

export const dispatch = (url: string) => {
  window.history.pushState(url, null, url)
  historyObs.dispatch(url)
}

export const useRoute = (
  url: string,
  todo: Function,
  isRoot: boolean = false
) => {
  const match = ($url: string) => $url.includes(url) && todo($url)
  historyObs.subscribe(match)

  isRoot && historyObs.dispatch(url)

  return () => {
    historyObs.unsubscribe(match)
  }
}
