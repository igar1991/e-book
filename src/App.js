import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navbar } from './components/nav';
import { Book } from './pages/book';
import { Result } from './pages/result';


function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Book} />
        <Route path={"/result"} component={Result} />
        <Route path={"/solution"} component={Result} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
