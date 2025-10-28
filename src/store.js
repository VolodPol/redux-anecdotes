import filterReducer from './reducers/filterReducer.js'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        filter: filterReducer,
        anecdotes: anecdoteReducer,
        notification: notificationReducer
    }
})

export default store