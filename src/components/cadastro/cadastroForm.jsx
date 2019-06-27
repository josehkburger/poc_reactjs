import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { create, remove } from './cadastroActions'

class CadastroForm extends Component {

        constructor(props){
          super(props)
          this.state = {
            nome: '',
            cargo: '',
            salario: '',
          }
          this.handleNome = this.handleNome.bind(this)
          this.handleCargo = this.handleCargo.bind(this)
          this.handleSalario = this.handleSalario.bind(this)
      }

        handleNome(e){
          this.setState({
            nome: e.target.value
          })
        }

        handleCargo(e){
          this.setState({
            cargo: e.target.value
          })
        }

        handleSalario(e){
          this.setState({
            salario: e.target.value
          })
        }
/*       const handleNomea = e => setState({
          nome : e.target.value
        })

        handleCargo = (e) => this.setState({
          cargo : e.target.value
        })

        handleSalario = (e) => this.setState({
          salario : e.target.value
        })
*/
  render(){
    const { create } = this.props
    return (
      <div className='mainContent'>
          <fieldset>
              <legend>
                  Inserir
              </legend>
              <main>
                  <form>
                      <div className="formInput">
                          <label>Nome </label>
                          <input id="nomeField" type="text"
                          onChange={this.handleNome} />
                      </div>

                      <div className="formInput">
                          <label>cargo </label>
                          <input id="cargoField" type="text"
                          onChange={this.handleCargo}/>
                      </div>

                      <div className="formInput">
                          <label>salario</label>
                          <input id="salarioField" type="text"
                           onChange={this.handleSalario}/>
                      </div>
                      <div className="formInput">
                          <button type="button" onClick={() => create(this.state)}>salvar</button>
                      </div>
                  </form>
              </main>
          </fieldset>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ create, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadastroForm)
