/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:31:40
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-04 14:31:40
 */
import { SubscribeMap, Cancel } from './type'
import { HistoryStore } from './HistoryStore'

export function subscribe(routes: SubscribeMap): Cancel
export function subscribe(path: string, callback: Function): Cancel

export function subscribe(
  arg1: SubscribeMap | string,
  arg2?: Function
): Cancel {
  if (typeof arg1 === 'string') {
    HistoryStore.set(arg1, arg2)

    return () => HistoryStore.del(arg1)
  } else {
    Object.keys(arg1).forEach(key => HistoryStore.set(key, arg1[key]))

    return () => Object.keys(arg1).forEach(key => HistoryStore.del(key))
  }
}
