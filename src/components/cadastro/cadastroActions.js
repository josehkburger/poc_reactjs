export const create = cadastro => ({
    type:'CREATE_USER',
    payload: cadastro
})

export const remove = cadastro => ({
    type:'REMOVE_USER',
    payload:cadastro
})
