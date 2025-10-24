import { useDispatch, useSelector } from "react-redux";
import { upvote } from "../reducers/anecdoteReducer.js";
import { Anecdote } from "./Anecdote.jsx";

export const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.toSorted((a, b) => b.votes - a.votes))

    const vote = id => dispatch(upvote(id))

    return (
        <>
            {anecdotes.map(anecdote => (
                <Anecdote key={anecdote.id} anecdote={anecdote} onVote={vote}/>
            ))}
        </>
    )
}