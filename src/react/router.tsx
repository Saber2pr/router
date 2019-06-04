/*
 * @Author: saber2pr
 * @Date: 2019-06-03 18:19:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 16:59:30
 */
import React, { useState, useEffect } from 'react'
import { isRoute, isDefaultRoute } from './route'
import { History } from '../core'
import { useHistory } from './history'
import { createRouteFrame } from './createRouteFrame'

export interface RouterProps {
  children: JSX.Element | Array<JSX.Element>
  history?: History
}

export function Router({ children, history }: RouterProps) {
  const [frame, render] = useState<JSX.Element | JSX.Element[]>()

  const H = useHistory(history)

  const list = React.Children.toArray(children)

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

    try {
      const defaultRoute = list.find(isDefaultRoute) || list.find(isRoute)
      // if not default tag, use the first route.
      const exec = defaultRoute.props.path

      H.push(exec)
    } catch (error) {
      H.push('/404')
    }

    return () => effects.forEach(c => c())
  }, [children])

  return <>{frame}</>
}
