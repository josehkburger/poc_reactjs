const INITIAL_STATE = { lista: []}

export default (state = INITIAL_STATE, action) => {

  const remove = (array, element) => {
    return array.filter(cad => cad !== element)
  }

  switch(action.type){
    case 'CREATE_USER':
      return {...state, lista: [...state.lista, action.payload]}
    case 'REMOVE_USER':
      return {...state, lista: remove(state.lista, action.payload)}
    default:
      return state
  }
}
