import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import reducer from './reducers'

const thunk = store => next => action =>
  typeof action === 'function' ? action(next, store.getState) : next(action)

// export default createStore(reducer, applyMiddleware(thunk, logger))
export default createStore(reducer, applyMiddleware(thunk))
