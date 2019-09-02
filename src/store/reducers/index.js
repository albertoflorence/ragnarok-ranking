import { combineReducers } from 'redux'
import ranking, * as fromRanking from './ranking'
import isFetching, * as fromIsFetching from './isFetching'
const rootReducer = combineReducers({
  ranking,
  isFetching
})

export default rootReducer

export const getRanking = ({ ranking }, options) => fromRanking.getRanking(ranking, options)

export const getPlayer = ({ ranking }, name) => fromRanking.getPlayer(ranking, name)

export const getDetails = ({ ranking }, name) => fromRanking.getDetails(ranking, name)

export const getIsFetching = ({ isFetching }) => fromIsFetching.getIsFetching(isFetching)
