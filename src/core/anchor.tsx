/*
 * @Author: saber2pr
 * @Date: 2019-04-02 18:06:08
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 17:17:55
 */
import React from 'react'
import { push } from './saber-router'
import { createAction } from '@saber2pr/event'
/**
 * AnchorProps
 *
 * @export
 * @interface AnchorProps
 * @extends {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>}
 * @template Action
 */
export interface AnchorProps<Action extends createAction>
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href?: Action['name']
  data?: Action['data']
}
/**
 * Anchor
 *
 * @export
 * @template Action
 * @param {AnchorProps<Action>} props
 * @returns
 */
export function Anchor<Action extends createAction>(
  props: AnchorProps<Action>
) {
  const origin_onClick = props.onClick

  const onClick_alter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault()

    const url = props.href
    url && push(url, props.data)

    origin_onClick && origin_onClick(event)
  }

  return <a {...props} onClick={onClick_alter} />
}
