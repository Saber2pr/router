/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:39:57
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 14:57:25
 */
import { HistoryStore } from './HistoryStore'
import { execute } from './execute'

export function push(url: string, scrollReset: boolean = true) {
  HistoryStore.current = execute(HistoryStore.get(), url)

  window.history.pushState(url, null, url)
  scrollReset && window.scroll(0, 0)
}

window.onpopstate = event =>
  (HistoryStore.current = execute(HistoryStore.get(), event.state))
