import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/nav";
import { BookState } from "./context/book/BookState";
import { ResultState } from "./context/result/resultState";
import { SolutionState } from "./context/solution/solutionState";
import { ThemeState } from "./context/themebook/themeState";
import { Book } from "./pages/book";
import { Menu } from "./pages/menu";
import { Result } from "./pages/result";
import { Solution } from "./pages/solution";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <ResultState>
      <BookState>
        <ThemeState>
          <SolutionState>
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
          </SolutionState>
        </ThemeState>
      </BookState>
    </ResultState>
    </Provider>
  );
}

export default App;
