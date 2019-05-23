/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 13:55:00
 */
import React from 'react'
import { push } from './var';

export interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  scrollReset?: boolean
}

export function Anchor(props: AnchorProps) {
  const origin_onClick = props.onClick

  const onClick_alter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()

    const url = props.href
    url && push(url, props.scrollReset)

    origin_onClick && origin_onClick(event)
  }

  return <a {...props} onClick={onClick_alter} />
}
