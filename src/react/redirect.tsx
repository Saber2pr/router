/*
 * @Author: saber2pr
 * @Date: 2019-06-03 19:12:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-03 23:59:13
 */
import React, { useEffect, useContext } from 'react'

export const RedirectCtx = React.createContext(new Map<string, string>())

export interface RedirectProps {
  from: string
  to: string
}

export function Redirect({ from, to }: RedirectProps) {
  const RedirectMap = useContext(RedirectCtx)

  useEffect(() => {
    RedirectMap.set(from, to)
    return () => RedirectMap.delete(from)
  }, [from, to])

  return <></>
}
