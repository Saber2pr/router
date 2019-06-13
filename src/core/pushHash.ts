/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:30:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 13:51:17
 */
import { HistoryStore } from './HistoryStore'
import { execute, getMaxLenChildStr } from './execute'

export function pushHash(url: string, scrollReset?: boolean) {
  // HistoryStore.current = execute(HistoryStore.get(), url)

  if (!getMaxLenChildStr(HistoryStore.get(), url)) throw new Error()

  window.location.hash = `#${url}`
  scrollReset && window.scroll(0, 0)
}

window.onhashchange = () => {
  HistoryStore.current = execute(HistoryStore.get(), location.hash.slice(1))
}
