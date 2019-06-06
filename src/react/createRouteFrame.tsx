/*
 * @Author: saber2pr
 * @Date: 2019-06-04 16:44:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 23:39:09
 */
import React from 'react'
import { isRoute } from './components/route'
import { KAlive } from './components/KAlive'

export function createRouteFrameNoCache(
  elements: Array<JSX.Element>,
  index: number
) {
  return elements.filter((c, i) => {
    if (!isRoute(c)) return true

    return i === index
  })
}

export function createRouteFrameWithCache(
  elements: Array<JSX.Element>,
  index: number
) {
  return elements.map((c, i) => {
    if (!isRoute(c)) return c

    if (i === index) return c

    return <KAlive key={i}>{c}</KAlive>
  })
}
