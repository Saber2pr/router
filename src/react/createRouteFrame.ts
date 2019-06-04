/*
 * @Author: saber2pr
 * @Date: 2019-06-04 16:44:27
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 17:02:14
 */
import { isRoute } from './route'
import ReactDOM from 'react-dom'

export function createRouteFrame(elements: Array<JSX.Element>, index: number) {
  return elements.filter((c, i) => {
    if (!isRoute(c)) return true

    // const cache = c.props.cache

    // if (cache === 'root') {
    //   if (i !== index) {
    //     ReactDOM.createPortal(c, document.body)
    //     return false
    //   }
    // }

    return i === index
  })
}
