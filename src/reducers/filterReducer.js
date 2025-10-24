const FILTER_ACTION = 'FILTER'

export const filterAction = filter => ({
    type: FILTER_ACTION,
    payload: filter
})

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case FILTER_ACTION: return action.payload
    }

    return state
}

export default filterReducer