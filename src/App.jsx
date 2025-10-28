import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeAnecdotes } from "./reducers/anecdoteReducer.js";

import Notification from "./components/Notification.jsx";
import Filter from "./components/Filter.jsx";
import { AnecdoteForm } from "./components/AnecdoteForm.jsx";
import { AnecdoteList } from "./components/AnecdoteList.jsx";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAnecdotes())
    }, [dispatch])

    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification/>
            <Filter/>
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default App
