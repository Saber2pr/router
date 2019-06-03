/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-03 21:29:43
 */
import React from 'react'
import History from '../core'

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  to: string
  scrollReset?: boolean
}

export function Link({ to, scrollReset, onClick, ...props }: LinkProps) {
  props.href = to

  const dispatch = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()

    try {
      History.push(to, scrollReset)
    } catch (error) {
      History.push('/404')
    }

    onClick && onClick(event)
  }

  return <a {...{ ...props, href: to }} onClick={dispatch} />
}
