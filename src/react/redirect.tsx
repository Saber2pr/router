/*
 * @Author: saber2pr
 * @Date: 2019-06-03 19:12:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-03 23:50:44
 */
import React, { useEffect } from 'react'

export const RedirectMap = new Map<string, string>()

export interface RedirectProps {
  from: string
  to: string
}

export function Redirect({ from, to }: RedirectProps) {
  RedirectMap.set(from, to)
  useEffect(() => {
    return () => RedirectMap.delete(from)
  }, [from, to])

  return <></>
}
