/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-03 23:59:23
 */
import React, { useContext } from 'react'
import History from '../core'
import { RedirectCtx } from './redirect'

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  to?: string
  scrollReset?: boolean
}

export function Link({ to, scrollReset, onClick, ...props }: LinkProps) {
  const RedirectMap = useContext(RedirectCtx)
  const href = to || props.href

  const dispatch = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()

    if (href) {
      try {
        RedirectMap.has(href)
          ? History.push(RedirectMap.get(href), scrollReset)
          : History.push(href, scrollReset)
      } catch (error) {
        History.push('/404')
      }
    }

    onClick && onClick(event)
  }

  return <a {...{ ...props, href }} onClick={dispatch} />
}
