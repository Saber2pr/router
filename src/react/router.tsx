/*
 * @Author: saber2pr
 * @Date: 2019-06-03 18:19:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-03 23:56:40
 */
import React, { useState, useEffect } from 'react'
import { isRoute, isDefaultRoute } from './route'
import History from '../core'

export interface RouterProps {
  children: JSX.Element | Array<JSX.Element>
}

export function Router({ children }: RouterProps) {
  const [frame, render] = useState<JSX.Element | JSX.Element[]>()

  const list = React.Children.toArray(children)

  const defaultRoute = list.find(isDefaultRoute)

  useEffect(() => {
    const effects = list.reduce(
      (receiver, c, index) => {
        // is not route component
        if (!isRoute(c)) return receiver

        // is none matched
        if (!c.props.path) {
          return receiver.concat(
            History.subscribe('/404', () => render(<c.props.component />))
          )
        }

        // create route's frame
        const rFrame = list.filter((c, i) => (isRoute(c) ? i === index : true))
        const effect = History.subscribe(c.props.path, () => render(rFrame))

        return receiver.concat(effect)
      },
      [] as Function[]
    )

    // default 404
    effects.concat(History.subscribe('/404', () => render(<h1>404</h1>)))

    try {
      // if not default tag, use `/`
      const exec = defaultRoute ? defaultRoute.props.path : '/'
      History.push(exec)
    } catch (error) {
      History.push('/404')
    }

    return () => effects.forEach(c => c())
  }, [children])

  return <>{frame}</>
}
