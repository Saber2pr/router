/*
 * @Author: saber2pr
 * @Date: 2019-06-03 18:19:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 23:28:18
 */
import React, { useState, useEffect } from 'react'
import { isRoute, isDefaultRoute } from './route'
import { History } from '../../core'
import { useHistory, usePush } from '../hook'
import {
  createRouteFrameNoCache,
  createRouteFrameWithCache
} from '../createRouteFrame'

export interface RouterProps {
  children: JSX.Element | Array<JSX.Element>
  history?: History
  cache?: boolean
}

export function Router({ children, history, cache }: RouterProps) {
  const [frame, render] = useState<JSX.Element | JSX.Element[]>()

  const H = useHistory(history)
  const [push] = usePush()

  const list = React.Children.toArray(children)

  const createRouteFrame = cache
    ? createRouteFrameWithCache
    : createRouteFrameNoCache

  useEffect(() => {
    const effects = list.reduce(
      (receiver, c, index) => {
        // is not route component
        if (!isRoute(c)) return receiver

        // is none matched
        if (!c.props.path) {
          return receiver.concat(
            H.subscribe('/404', () => render(<c.props.component />))
          )
        }

        // create route's frame
        const rFrame = createRouteFrame(list, index)
        const effect = H.subscribe(c.props.path, () => render(rFrame))

        return receiver.concat(effect)
      },
      [] as Function[]
    )

    // default 404
    effects.concat(H.subscribe('/404', () => render(<h1>404</h1>)))

    // if not default tag, use the first route.
    const defaultRoute = list.find(isDefaultRoute) || list.find(isRoute)
    const exec = defaultRoute.props.path

    push(exec)

    return () => effects.forEach(c => c())
  }, [children])

  return <>{frame}</>
}
