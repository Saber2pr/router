/*
 * @Author: saber2pr
 * @Date: 2019-06-04 16:44:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 15:06:03
 */
import { isRoute } from './components/route'

export function createRouteFrame(elements: Array<JSX.Element>, index: number) {
  return elements.filter((c, i) => {
    if (!isRoute(c)) return true

    return i === index
  })
}
