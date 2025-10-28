import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store }>
        <App/>
    </Provider>
)
//Finished 6.9 - 2 hours
// almost finished 6.13 - 2 hours 15 minutes