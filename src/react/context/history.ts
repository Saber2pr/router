/*
 * @Author: saber2pr
 * @Date: 2019-06-06 14:44:44
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-06 14:44:44
 */
import React from 'react'
import { History, browserHistory } from '../../core'

export const HistoryCtx = React.createContext<{ history: History }>({
  history: browserHistory
})
