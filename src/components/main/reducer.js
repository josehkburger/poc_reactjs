import { combineReducers } from 'redux'
import cadastroReducer from '../cadastro/cadastroReducer'

const rootReducer = combineReducers({
    cadastro: cadastroReducer
})

export default rootReducer
