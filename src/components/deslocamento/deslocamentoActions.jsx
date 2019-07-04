export const create = deslocamento => ({
    type: 'CREATE_DESLOCAMENTO',
    payload: deslocamento
})

export const remove = deslocamento => ({
    type: 'REMOVE_DESLOCAMENTO',
    payload: deslocamento
})