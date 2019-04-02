/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-02 18:14:44
 */
import React from 'react'
import { push } from './saber-router'

export interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Anchor = (props: AnchorProps) => {
  const origin_onClick = props.onClick
  if (origin_onClick) {
    props.onClick = event => {
      event.preventDefault()
      origin_onClick(event)
      push(props.href)
    }
  }
  return <a {...props} />
}
