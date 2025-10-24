import { useDispatch, useSelector } from 'react-redux'
import { create, upvote } from "./reducers/anecdoteReducer.js";

const App = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.toSorted((a, b) => b.votes - a.votes))

    const vote = id => dispatch(upvote(id))

    const createAnecdote = (event) => {
        event.preventDefault()
        const content = event.target['newAnecdote'].value
        dispatch(create(content))
    }

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
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <div>
                    <input name="newAnecdote" type="text"/>
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default App
