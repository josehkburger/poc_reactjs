const INITIAL_STATE = {deslocamento:[]}

export default (state = INITIAL_STATE, action) => {

    const remove = (array, element) => {
        return array.filter(cad => cad !== element)
      }

    switch(action.type){
        case 'CREATE_DESLOCAMENTO':
            return {...state, deslocamento: [...state.deslocamento, action.payload]}
        case 'REMOVE_DESLOCAMENTO':
            return {...state, deslocamento: remove(state.deslocamento, action.payload)}
        default:
            return state
    }   
}