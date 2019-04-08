/*
 * @Author: saber2pr
 * @Date: 2019-04-08 13:01:00
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 13:03:40
 */
/**
 * isBrowser
 *
 * @export
 * @returns
 */
export function isBrowser() {
  return typeof window !== 'undefined'
}
/**
 * isNodejs
 *
 * @export
 * @returns
 */
export function isNodejs() {
  return typeof process !== 'undefined'
}
