import React, { Component } from 'react'

import CadastroForm from './cadastroForm'
import CadastroList from './cadastroList'

class cadastro extends Component{


  render(){

    return(
    <div className="container-crud">
      <CadastroForm />
      <CadastroList />
    </div>
    )
}
}
export default cadastro
