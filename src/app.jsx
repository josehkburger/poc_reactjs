import React from 'react'

export default props =>{

    return (
      <div className='mainContent'>
          <fieldset>
              <legend>
                  Inserir
              </legend>
              <main>
                  <form>
                      <div className="formInput">
                          <label for="nomeField">Nome</label>
                          <input id="nomeField" type="text" />
                      </div>

                      <div className="formInput">
                          <label for="cargoField">Cargo</label>
                          <input id="cargoField" type="text" />
                      </div>

                      <div className="formInput">
                          <label for="salarioField">Salário</label>
                          <input id="salarioField" type="text" />
                      </div>

                      <div className="formInput">
                          <input type="submit" value="Adicionar" />
                      </div>
                  </form>
              </main>
          </fieldset>
      </div>
    )
}
