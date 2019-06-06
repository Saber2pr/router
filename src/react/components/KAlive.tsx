/*
 * @Author: saber2pr
 * @Date: 2019-06-06 23:22:52
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 23:34:43
 */
import React, { useRef, useLayoutEffect } from 'react'

export interface KAliveProps {
  children: JSX.Element | Array<JSX.Element>
  isShow?: 'none' | 'block'
}

export function KAlive({ children: C, isShow = 'none' }: KAliveProps) {
  const ref = useRef<HTMLDivElement>()

  useLayoutEffect(() => {
    ref.current.style.display = isShow
  }, [isShow])

  return <div ref={ref}>{C}</div>
}
