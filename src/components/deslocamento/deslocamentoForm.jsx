import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { create, remove } from './deslocamentoActions'

class DeslocamentoForm extends Component{

    constructor(props){
        super(props)
        this.state = {
            tipoDeslocamento:'',
            descricao:'',
        }
    
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
     
    render(){
        const { create } = this.props
        return(
            <div className='mainContent'>
            <fieldset>
                <legend>
                    Inserir
                </legend>
            <main>
                <form>   
                  <div className='formInput'>
                    <label>tipo deslocamento</label>
                    <input id='first-id' type='text'
                    onChange={this.handleChange} name='tipoDeslocamento'></input>
                  </div>
                  <div className='formInput'>
                    <label>descricao</label>
                    <input id='first-id' type='text'
                    onChange={this.handleChange} name='descricao'></input>
                  </div>
                  <button className='submit-form' type='button' onClick={() => create(this.state)}>cadastrar</button>
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
export default connect(mapStateToProps, mapDispatchToProps) (DeslocamentoForm)