import React from 'react'


import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login'
import Contato from './pages/contato'

function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes