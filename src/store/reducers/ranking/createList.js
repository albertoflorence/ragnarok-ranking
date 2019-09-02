import { FETCH_RANKING, FILTER_RANKING, SORT_RANKING } from '../../constants'

const createList = list => {
  const names = (state = [], { sortBy = 'kills', filterText, data, type, ids }) => {
    if (list === 'all' && state.length > 0) return state
    switch (type) {
      case FETCH_RANKING:
        return Object.keys(data)
          .slice(1)
          .sort(sort(data)[sortBy])
      case FILTER_RANKING:
        if (filterText === '') return ids
        return ids.filter(
          id =>
            compare(data[id].classe, filterText) ||
            compare(data[id].guild, filterText) ||
            compare(data[id].player, filterText)
        )
      case SORT_RANKING:
        return [...state].sort(sort(data)[sortBy])
      default:
        return state
    }
  }

  return names
}

export default createList

export const getNames = state => state

const sort = data => ({
  kills: (a, b) => data[b].matou.length - data[a].matou.length,
  deaths: (a, b) => data[b].morreu.length - data[a].morreu.length,
  guild: (a, b) => (data[a].guild > data[b].guild ? 1 : -1),
  classe: (a, b) => (data[a].classe > data[b].classe ? 1 : -1)
})

const compare = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase())
