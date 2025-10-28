import { createSlice } from "@reduxjs/toolkit"
import { getAll } from "../services/anecdotes.js"

const anecdoteSlicer = createSlice({
    name: 'anecdote',
    initialState: [],
    reducers: {
        vote: (state, action) => {
            const idx = state.findIndex(i => i.id === action.payload)
            if (idx !== -1)
                state[idx].votes += 1
            return state
        },
        create: (state, action) => {
            state.push(action.payload)
            return state
        },
        setAnecdotes: (state, action) => {
            return action.payload
        }
    }
})

const { setAnecdotes } = anecdoteSlicer.actions

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const fetched = await getAll()
        dispatch(setAnecdotes(fetched))
    }
}

export const { vote, create } = anecdoteSlicer.actions
export default anecdoteSlicer.reducer