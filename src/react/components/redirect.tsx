/*
 * @Author: saber2pr
 * @Date: 2019-06-03 19:12:24
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 14:48:56
 */
import React, { useEffect, useContext } from 'react'
import { RedirectCtx } from '../context'

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
