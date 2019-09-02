import { getData } from '../../services'
import {
  FETCH_RANKING,
  FILTER_RANKING,
  FETCHING_START,
  FETCHING_END,
  SORT_RANKING
} from '../constants'
import store from '../../store/index'

export const fetchRanking = () => dispatch => {
  dispatch({
    type: FETCHING_START
  })
  getData().then(data => {
    dispatch({
      type: FETCH_RANKING,
      data
    })
    dispatch({
      type: FETCHING_END
    })
  })
}
export const filterRanking = filterText => ({
  type: FILTER_RANKING,
  data: store.getState().ranking.byName,
  ids: store.getState().ranking.idLists.all,
  filterText
})

export const sortRanking = sortBy => ({
  type: SORT_RANKING,
  data: store.getState().ranking.byName,
  sortBy
})
