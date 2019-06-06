/*
 * @Author: saber2pr
 * @Date: 2019-06-03 18:19:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 16:52:11
 */
import React from 'react'

export interface RouteProps {
  path?: string
  component: React.ComponentType<any>
  default?: boolean
}

export interface RouteElement extends JSX.Element {
  props: RouteProps
}

export const isRoute = (c: JSX.Element): c is RouteElement =>
  (c.props as RouteProps).component !== undefined

export const isDefaultRoute = (c: JSX.Element): c is RouteElement =>
  isRoute(c) && c.props.default !== undefined

export function Route({ component: R, ...props }: RouteProps) {
  return <R {...props} />
}
