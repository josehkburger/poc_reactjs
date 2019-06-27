export const create = lugar => ({
    type: 'CREATE_LUGAR',
    payload: lugar
})

export const remove = lugar => ({
    type: 'REMOVE_LUGAR',
    payload: lugar
})
