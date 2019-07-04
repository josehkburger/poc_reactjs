import React from 'react'

import DeslocamentoForm from './deslocamentoForm'
import DeslocamentoList from './deslocamentoList'

export default props => 
    <div className='crud-container-deslocamento'>
        <DeslocamentoForm />
        <DeslocamentoList />
    </div>