/*
 * @Author: saber2pr
 * @Date: 2019-04-03 15:50:57
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-03 16:49:54
 */
import { Observable } from 'saber-observable'
import { useEffect } from 'react'
const historyObs = new Observable('')

window.onpopstate = event => historyObs.dispatch(event.state)

let __currentHref = ''

export const getState = () => __currentHref

export const dispatch = (url: string) => {
  window.history.pushState(url, null, url)
  __currentHref = url
  historyObs.dispatch(url)
}

export const useRoute = (
  url: string,
  todo: Function,
  matchRule?: ($url: string) => boolean
) =>
  useEffect(() => {
    const match = ($url: string) => {
      if (typeof matchRule !== 'undefined') {
        matchRule($url) && todo($url)
      } else {
        $url.includes(url) && todo($url)
      }
    }
    historyObs.subscribe(match)

    return () => historyObs.unsubscribe(match)
  })
