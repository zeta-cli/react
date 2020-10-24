import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import WbWelcomePage from './wb-welcome.page';
import WbDatasourcesPage from './wb-datasources.page';

/**
 * Workbench Layout
 *
 * @returns {object} Workbench layout react component
 */
export default function WorkbenchLayout() {
  return (
    <div className="container">
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/test">Welcome</Link>
          {' '}
        </li>
        <li>
          <Link to="/test/datasources">Datasources</Link>
          {' '}
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/test" component={WbWelcomePage} />
        <Route path="/test/datasources" component={WbDatasourcesPage} />
      </Switch>
    </div>
  );
}
