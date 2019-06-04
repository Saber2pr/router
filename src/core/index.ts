/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:47:23
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 14:54:55
 */
import { push } from './push'
import { pushHash } from './pushHash'
import { subscribe } from './subscribe'
import { getHref } from './getHref'
import { History } from './type'
export * from './type'

export const hashHistory: History = {
  push: pushHash,
  subscribe,
  getHref
}

export const browserHistory: History = {
  push,
  subscribe,
  getHref
}

export default {
  push,
  pushHash,
  subscribe,
  getHref
}
