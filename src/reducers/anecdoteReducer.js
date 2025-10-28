import { createSlice } from "@reduxjs/toolkit";

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

export const { vote, create, setAnecdotes } = anecdoteSlicer.actions
export default anecdoteSlicer.reducer