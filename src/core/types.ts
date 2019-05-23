/*
 * @Author: saber2pr 
 * @Date: 2019-05-23 13:48:17 
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 14:17:50
 */
export interface Routes {
  [url: string]: string | VoidFunction
}

export interface Cancel {
  (): void
}