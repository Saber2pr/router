/*
 * @Author: saber2pr
 * @Date: 2019-06-04 15:01:38
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 15:00:18
 */
import { useContext } from 'react'
import { History } from '../../core'
import { HistoryCtx } from '../context'

export const useHistory = (history?: History) => {
  const Ctx = useContext(HistoryCtx)

  if (history) Ctx.history = history

  return Ctx.history
}
