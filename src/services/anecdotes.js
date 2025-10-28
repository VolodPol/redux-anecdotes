const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await fetch(baseUrl)
    if (!response.ok)
        throw new Error('Can\'t fetch anecdotes from server')

    return await response.json()
}

const createNew = async (newAnecdote) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newAnecdote, votes: 0 })
    })
    if (!response.ok)
        throw new Error('Failed to create new anecdote on server')

    return await response.json()
}

const voteFor = async (updated) => {
    const { id } = updated
    const response = await fetch(`${baseUrl}/${id.toString()}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
    })

    if (!response.ok)
        throw new Error('Failed to update anecdote\'s votes on server')

    return await response.json()
}

export { getAll, createNew, voteFor }