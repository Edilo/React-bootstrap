import React from 'react';
import { Link } from 'react-router-dom'

function Contato() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-sm-12 bg-light rounded text-center pt-2 pb-2">
          <h3>Telefone 92 984724136</h3>
        </div>
      </div>

      <div className="row">
        <div className="col col-sm-5"></div>
        <div className="col col-sm-2">
          <Link to="/" className="btn btn-primary btn-block mt-3"> Home</Link>
        </div>
        <div className="col col-sm-5"></div>
      </div>
    </div>
  );
}

export default Contato;
