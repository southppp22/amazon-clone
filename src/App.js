import { Header, Cart, Home } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "common/style/GlobalStyle";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
