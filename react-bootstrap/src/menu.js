import React from 'react'


import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom'

import Login from './pages/login'
import Contato from './pages/contato'

function Menu(){

    return(
        <BrowserRouter>
            {/* <Switch> */}
                <Link to="/contato" className="btn btn-success">Contato</Link>
                <Link to="/" className="btn">Home</Link>
                <Route path="/" exact component={Login} />
                <Route path="/contato" component={Contato} />
            {/* </Switch> */}
        </BrowserRouter>
    )
}

export default Menu