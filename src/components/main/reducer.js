import { combineReducers } from 'redux'
import cadastroReducer from '../cadastro/cadastroReducer'
import lugarReducer from '../lugar/lugarReducers'
import deslocamentoReducers from '../deslocamento/deslocamentoReducers';

const rootReducer = combineReducers({
    cadastro: cadastroReducer,
    lugar: lugarReducer,
    deslocamento: deslocamentoReducers
})

export default rootReducer
