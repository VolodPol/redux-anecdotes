import { useDispatch, useSelector } from 'react-redux'
import { upvote } from "./reducers/anecdoteReducer.js";
import { AnecdoteForm } from "./components/AnecdoteForm.jsx";

const App = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.toSorted((a, b) => b.votes - a.votes))

    const vote = id => dispatch(upvote(id))

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
            <AnecdoteForm/>
        </div>
    )
}

export default App
