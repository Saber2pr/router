/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-03 15:42:47
 */
import React from 'react'
import { dispatch } from './router'
/**
 * AnchorProps
 *
 * @export
 * @interface AnchorProps
 * @extends {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>}
 */
export interface AnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Anchor = (props: AnchorProps) => {
  const origin_onClick = props.onClick

  const onClick_alter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()
    dispatch(props.href)

    origin_onClick && origin_onClick(event)
  }

  return <a {...props} onClick={onClick_alter} />
}
