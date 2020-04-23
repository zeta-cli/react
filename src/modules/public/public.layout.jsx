import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/login.page';
import { LogoutPage } from './pages/logout.page';
import './public.layout.css';

function PublicNavbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand p-0" href="/public">
          <h3 className="pl-2 font-weight-bold title d-inline-block pb-0 pt-1">Zeta</h3>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/public" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/public/login" className="nav-link">Login</Link>
            </li>
            <li className=" nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/public" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/public">Action</a>
                <a className="dropdown-item" href="/public">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/public">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/public">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function PublicFooter() {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div>
          <a href="/public" className="pr-4 text-light">TEAM</a>
          <a href="/public" className="pr-4 text-light">TOOLS</a>
          <a href="/public" className="pr-4 text-light">STORE</a>
          <a href="/public" className="pr-4 text-light">NEWSLETTER</a>
        </div>
        <div className="pt-2">
          <span className="text-muted pr-2">© 2019</span>
          <span className="text-muted pr-2">Detritus Software, Inc. All Rights Reserved.</span>
          <a href="/public" className="pr-2">Terms of Use</a>
          <a href="/public" className="pr-2">Privacy</a>
        </div>
      </div>
    </div>
  );
}

export default function PublicLayout() {
  return (
    <div>

      {/* Navbar -------------------------------------------------------------------------------- */}

      <PublicNavbar></PublicNavbar>

      {/* Container ----------------------------------------------------------------------------- */}

      <div className="container">
        <Switch>
          <Route exact path="*/login" component={LoginPage}></Route>
          <Route exact path="*/logout" component={LogoutPage}></Route>
        </Switch>
      </div>

      {/* Footer -------------------------------------------------------------------------------- */}

      <PublicFooter></PublicFooter>

    </div>
  );
}
