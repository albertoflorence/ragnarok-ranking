import { FETCH_RANKING } from '../../constants'

const byName = (state = {}, { type, data }) => {
  switch (type) {
    case FETCH_RANKING:
      return {
        ...state,
        ...data
      }
    default: {
      return state
    }
  }
}

export default byName

export const getPlayer = (state, name) => state[name]
