import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { remove } from './lugarActions'

const LugarList = props => {

  const renderRows = () => {
      const lista = props.lugar || []
      return lista.map((lugar, index) => {
      return(
        <tr key={index}>
          <td>{index}</td>
          <td>{lugar.nome}</td>
          <td>{lugar.tipo}</td>
          <td>{lugar.descricao}</td>
          <td>{lugar.endereco}</td>
          <button type='button' onClick={() => props.remove(lugar)}>remover</button>
        </tr>
        )
      })
  }

  return(
    <table className='table'>
      <thead>
          <td>id</td>
          <td>nome</td>
          <td>tipo</td>
          <td>descricao</td>
          <td>endereco</td>
          <td>acoes</td>
      </thead>
      {renderRows()}
    </table>
  )
}

const mapStateToProps = state => ({lugar: state.lugar.lugar})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LugarList)
