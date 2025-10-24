import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import filterReducer from "./reducers/filterReducer.js"
import anecdoteReducer from './reducers/anecdoteReducer'

const store = createStore(combineReducers({
    filter: filterReducer,
    anecdotes: anecdoteReducer
}))

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
