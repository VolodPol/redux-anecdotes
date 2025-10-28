import { useDispatch } from "react-redux";
import { removeNotification, setNotification } from "./reducers/notificationReducer.js";
import Notification from "./components/Notification.jsx";
import Filter from "./components/Filter.jsx";
import { AnecdoteForm } from "./components/AnecdoteForm.jsx";
import { AnecdoteList } from "./components/AnecdoteList.jsx";

const App = () => {
    const dispatch = useDispatch()

    const notifyUpdate = notification => {
        dispatch(setNotification(notification))
        setTimeout(() => dispatch(removeNotification()), 5_000)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification/>
            <Filter/>
            <AnecdoteList notifyUpdate={notifyUpdate}/>
            <AnecdoteForm notifyUpdate={notifyUpdate}/>
        </div>
    )
}

export default App
