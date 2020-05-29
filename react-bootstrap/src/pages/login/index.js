import React from 'react';
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col col-sm-12 bg-light rounded text-center pt-2 pb-2">
                    <h3>React</h3>
                </div>
                <div className="col col-sm-3"></div>

                <div className="col col-sm-6 font-weight-bold rounded text-center pt-2 pb-2 pl-5 pr-5 mt-5">
                    <form className="form-group">
                        <div className="card">
                            <div className="card-header">
                                Login
                            </div>
                            <div className="card-body">
                                <div className="form-group text-left">
                                    <label className="text-primary" >Username</label>
                                    <input type="text" className="form-control" />
                                    <label className="text-primary" >Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-block btn-info">Access</button>
                                <Link to="/contato" className="btn btn-primary btn-block mt-3"> Contato</Link>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col col-sm-3"></div>

            </div>

        </div>
    );
}

export default Login;
