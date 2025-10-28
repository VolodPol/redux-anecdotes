const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await fetch(baseUrl)
    if (!response.ok)
        throw new Error('Can\'t fetch anecdotes from server')

    return await response.json()
}

export { getAll }