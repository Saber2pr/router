/*
 * @Author: saber2pr
 * @Date: 2019-05-23 13:48:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 16:50:08
 */
export interface Routes {
  [url: string]: string | Function
}

export interface Cancel {
  (): void
}
