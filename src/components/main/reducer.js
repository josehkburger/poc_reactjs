import { combineReducers } from 'redux'
import cadastroReducer from '../cadastro/cadastroReducer'
import lugarReducer from '../lugar/lugarReducers'

const rootReducer = combineReducers({
    cadastro: cadastroReducer,
    lugar: lugarReducer
})

export default rootReducer
