/*
 * @Author: saber2pr
 * @Date: 2019-06-06 14:41:05
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 15:05:17
 */
import { useContext } from 'react'
import { RedirectCtx, HistoryCtx } from '../context'

export function usePush(): [
  (href: string, scrollReset?: boolean) => void,
  () => string
] {
  const RedirectMap = useContext(RedirectCtx)
  const Ctx = useContext(HistoryCtx)

  const push = (href: string, scrollReset?: boolean) => {
    const H = Ctx.history

    try {
      const isRedirected = RedirectMap.has(href)

      isRedirected
        ? H.push(RedirectMap.get(href), scrollReset)
        : H.push(href, scrollReset)
    } catch (error) {
      H.push('/404')
    }
  }

  return [push, Ctx.history.getHref]
}
