import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = anecdote => {
    return {
        content: anecdote,
        id: getId(),
        votes: 0
    }
}

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
            state.push(asObject(action.payload))
            return state
        },
        setAnecdotes: (state, action) => {
            return action.payload
        }
    }
})

export const { vote, create, setAnecdotes } = anecdoteSlicer.actions
export default anecdoteSlicer.reducer