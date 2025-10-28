import { createNewAnecdote } from '../reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'
import { notify } from '../reducers/notificationReducer.js'

export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        const content = event.target['newAnecdote'].value
        dispatch(createNewAnecdote(content))
        dispatch(notify(`You created '${content}'`))
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <div>
                    <input name="newAnecdote" type="text"/>
                </div>
                <button type="submit">create</button>
            </form>
        </>
    )
}