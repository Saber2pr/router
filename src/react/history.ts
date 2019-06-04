/*
 * @Author: saber2pr
 * @Date: 2019-06-04 15:01:38
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 15:16:38
 */
import React, { useContext } from 'react'
import { History, browserHistory } from '../core'

const HistoryCtx = React.createContext<{ history: History }>({
  history: browserHistory
})

export const useHistory = (history?: History) => {
  const Ctx = useContext(HistoryCtx)

  if (history) Ctx.history = history

  return Ctx.history
}
