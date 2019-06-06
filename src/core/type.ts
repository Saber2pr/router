/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:27:10
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 14:54:43
 */
export interface SubscribeMap {
  [url: string]: Function
}

export interface Cancel {
  (): void
}

export interface History {
  push: (url: string, scrollReset?: boolean) => void
  subscribe(routes: SubscribeMap): Cancel
  subscribe(path: string, callback: Function): Cancel
  getHref: () => string
}
