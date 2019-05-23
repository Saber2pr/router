/*
 * @Author: saber2pr
 * @Date: 2019-05-23 13:48:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 16:56:13
 */
import { Routes } from './types'
import { Config } from './config'

export function execute(routes: Routes, start: string) {
  let current = routes[start]

  if (typeof current === 'undefined') {
    throw new Error(`cannot find route:[${start}]`)
  }

  let url: string
  while (typeof current === 'string') {
    const next = routes[current]

    if (next) {
      url = current
      current = next
    } else {
      throw new Error(`cannot find route:[${current}]`)
    }
  }

  if (Config.ReactDOM) {
    Config.ReactDOM.render(current(), Config.container)
  } else {
    current()
  }

  return url || start
}
