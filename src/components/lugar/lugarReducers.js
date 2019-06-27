const INITIAL_STATE = {lugar: []}

export default (state = INITIAL_STATE, action) => {

  const remove = (array, element) => {
    return array.filter(cad => cad !== element)
  }

  switch(action.type){
    case 'CREATE_LUGAR':
      return {...state, lugar: [...state.lugar, action.payload]}
    case 'REMOVE_LUGAR':
      return {...state, lugar: remove(state.lugar, action.payload)}
    default:
      return state
  }
}
