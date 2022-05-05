import { combineReducers } from 'redux'
import byName, * as fromByName from './byName'
import createList, * as fromList from './createList'

const idLists = combineReducers({
  all: createList('all'),
  current: createList('current')
})

const ranking = combineReducers({
  byName,
  idLists
})

const populate = (data, names) => names.map(name => fromByName.getPlayer(data, name))

export default ranking

export const getRanking = ({ idLists, byName }) =>
  populate(byName, fromList.getNames(idLists['current']))

export const getPlayer = ({ byName }, name) => fromByName.getPlayer(byName, name)

export const getDetails = ({ byName }, playerName) => ({
  matou: populateClassAndGuild(byName, byName[playerName].matou),
  morreu: populateClassAndGuild(byName, byName[playerName].morreu)
})

const countKillsOf = prop => obj => ({
  ...obj,
  [prop]: obj[prop] ? obj[prop] + 1 : 1
})

const countKills = (obj, { classe, guild }) => ({
  ...obj,
  classes: countKillsOf(classe)(obj.classes),
  guilds: countKillsOf(guild)(obj.guilds)
})

const sortByKill = (a, b) => b.qtd - a.qtd

const organizeData = obj =>
  Object.keys(obj)
    .map(name => ({
      name,
      qtd: obj[name]
    }))
    .sort(sortByKill)

const mapperClassAndGuild = ({ classes, guilds }) => ({
  classes: organizeData(classes),
  guilds: organizeData(guilds)
})

const populateClassAndGuild = (byName, ids) =>
  mapperClassAndGuild(
    populate(byName, ids).reduce(countKills, {
      classes: {},
      guilds: {}
    })
  )
