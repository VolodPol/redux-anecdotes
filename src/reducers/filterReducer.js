import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        doFilter(state, action) {
            const { payload } = action
            if (payload)
                return payload
            return state
        }
    }
})

export const { doFilter } = filterSlice.actions
export default filterSlice.reducer