/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 14:59:39
 */
import React from 'react'
import { usePush } from '../hook'

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  to?: string
  scrollReset?: boolean
}

export function Link({ to, scrollReset, onClick, ...props }: LinkProps) {
  const href = to || props.href

  const [push] = usePush()

  const dispatch = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()

    href && push(href, scrollReset)

    onClick && onClick(event)
  }

  return <a {...{ ...props, href }} onClick={dispatch} />
}
