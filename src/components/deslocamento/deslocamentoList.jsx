import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove } from './deslocamentoActions'

const DeslocamentoList = props => {

    const renderRows = () => {
        const deslocamentos = props.deslocamento || []
        const { remove } = props
        return deslocamentos.map(deslocamento => {
            return(<tr>
                     <td>{deslocamento.tipoDeslocamento}</td>
                     <td>{deslocamento.descricao}</td>
                     <td>
                         <button onClick={() => remove(deslocamento)}> remove </button>
                         <button onClick={() => console.log(deslocamento)}> update </button>    
                     </td>
                   </tr>
            )
        })
    }

    return(
        <table className='table'>
            <thead>
                <td>tipo deslocamento</td>
                <td>descricao</td>
                <td>acoes</td>
            </thead>
                {renderRows()}
        </table>
    )
}

const mapStateToProps = state => ({deslocamento: state.deslocamento.deslocamento})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DeslocamentoList)