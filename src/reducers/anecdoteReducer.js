import { createSlice } from "@reduxjs/toolkit"
import {createNew, getAll} from "../services/anecdotes.js"

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

const { setAnecdotes, create } = anecdoteSlicer.actions

export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const fetched = await getAll()
        dispatch(setAnecdotes(fetched))
    }
}

export const createNewAnecdote = (content) => {
    return async (dispatch) => {
        const created = await createNew(content)
        dispatch(create(created))
    }
}

export const { vote } = anecdoteSlicer.actions
export default anecdoteSlicer.reducer