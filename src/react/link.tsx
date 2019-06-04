/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 15:17:05
 */
import React, { useContext } from 'react'
import { RedirectCtx } from './redirect'
import { useHistory } from './history'

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

  const H = useHistory()

  const dispatch = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()

    if (href) {
      try {
        RedirectMap.has(href)
          ? H.push(RedirectMap.get(href), scrollReset)
          : H.push(href, scrollReset)
      } catch (error) {
        H.push('/404')
      }
    }

    onClick && onClick(event)
  }

  return <a {...{ ...props, href }} onClick={dispatch} />
}
