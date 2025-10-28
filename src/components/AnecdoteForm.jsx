import { create } from '../reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'

export const AnecdoteForm = ({ notifyUpdate }) => {
    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        const content = event.target['newAnecdote'].value
        dispatch(create(content))
        notifyUpdate(`You created '${content}'`)
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