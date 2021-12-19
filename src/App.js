import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/nav";
import { Book } from "./pages/book";
import { Menu } from "./pages/menu";
import { Result } from "./pages/result";
import { Solution } from "./pages/solution";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
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

    </Provider>
  );
}

export default App;
