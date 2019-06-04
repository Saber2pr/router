/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:32:35
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-04 14:32:35
 */
import { HistoryStore } from './HistoryStore'

export function getHref() {
  return HistoryStore.current
}
