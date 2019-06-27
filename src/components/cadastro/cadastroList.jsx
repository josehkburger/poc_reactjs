import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { remove } from './cadastroActions'

  const CadastroList = props =>{

    const renderRows = () =>{
      const lista = props.lista || []
      return lista.map((cadastro, index) => {
        return(<tr key={cadastro.index}>
          <td>{index}</td>
          <td>{cadastro.nome}</td>
          <td>{cadastro.cargo}</td>
          <td>{cadastro.salario}</td>
          <td><button type="button" value="remover" onClick={() => props.remove(cadastro)}>remover</button></td>
        </tr>)
      }
      )
    }
      return(
        <table className='table'>
          <thead>
            <td>ID</td>
            <td>nome</td>
            <td>cargo</td>
            <td>salario</td>
            <td>acoes</td>
          </thead>
            {renderRows()}
        </table>
      )
  }

const mapStateToProps = state => ({lista: state.cadastro.lista})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadastroList)
