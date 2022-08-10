import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import counterReducer from './slices/counterSlice'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

// CombinedReducer
let rootReducer = combineReducers({
  counter: counterReducer,
})

// Hydration during SSG or SRG
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export const initStore = () => {
  let store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
  })

  return store
}

export const wrapper = createWrapper(initStore, { debug: true })
