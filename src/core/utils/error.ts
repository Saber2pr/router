/*
 * @Author: saber2pr
 * @Date: 2019-04-08 12:19:49
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 13:36:48
 */
/**
 * Exception
 *
 * @export
 * @param {Error} error
 * @param {string} [message]
 */
export function Exception(error: Error, message?: string) {
  throw new Error(`${error.message}\n${message}`)
}
