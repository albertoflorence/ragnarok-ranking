import { FETCHING_START, FETCHING_END } from '../constants'

const isFetching = (state = false, { type }) => {
  switch (type) {
    case FETCHING_START:
      return true
    case FETCHING_END:
      return false
    default: {
      return state
    }
  }
}

export default isFetching

export const getIsFetching = state => state
