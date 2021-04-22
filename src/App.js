import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navbar } from './components/nav';
import { Book } from './pages/book';
import { Menu } from './pages/menu';
import { Result } from './pages/result';
import { Solution } from './pages/solution';


function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Book} />
        <Route path={"/result"} component={Result} />
        <Route path={"/menu"} component={Menu} />
        <Route path={"/solution"} component={Solution} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
