import { useDispatch, useSelector } from "react-redux";
import { upvote } from "../reducers/anecdoteReducer.js";
import { Anecdote } from "./Anecdote.jsx";

export const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotes = useSelector(state => state.anecdotes)

    const filterAnecdotes = (anecdotes, filter) => {
        return anecdotes.filter(a => a.content.toUpperCase().includes(filter.toUpperCase()))
    }

    const sortAnecdotes = anecdotes => {
        return anecdotes.toSorted((a, b) => b.votes - a.votes)
    }

    const vote = id => dispatch(upvote(id))

    return (
        <>
            {sortAnecdotes(filterAnecdotes(anecdotes, filter)).map(anecdote => (
                <Anecdote key={anecdote.id} anecdote={anecdote} onVote={vote}/>
            ))}
        </>
    )
}