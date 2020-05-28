import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-sm-12 bg-light rounded text-center pt-2 pb-2">
          <h3>React</h3>
        </div>
        <div className="col col-sm-3"></div>
        <div className="col col-sm-6 font-weight-bold rounded text-center pt-2 pb-2 pl-5 pr-5 mt-5">
          <div className="col col-sm-3"></div>
          <div className="card">
            <div class="card-header">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
