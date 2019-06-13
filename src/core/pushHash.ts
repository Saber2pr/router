/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:30:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 13:51:17
 */
import { HistoryStore } from './HistoryStore'
import { execute, getMaxLenChildStr } from './execute'
import VM from '@saber2pr/schedular'

export function pushHash(url: string, scrollReset?: boolean) {
  if (!getMaxLenChildStr(HistoryStore.get(), url)) throw new Error()

  HistoryStore.current = url

  window.location.hash = `#${url}`
  scrollReset && window.scroll(0, 0)
}

window.onhashchange = () => {
  HistoryStore.current = execute(HistoryStore.get(), location.hash.slice(1))
}

window.onload = () => {
  new VM().push({
    expirationTime: 40,
    idleCallback: () => execute(HistoryStore.get(), HistoryStore.current)
  })
}
