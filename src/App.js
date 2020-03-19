import React, { Component } from "react";

import { Search, Borrow, Payment, Finished } from "./pages/";

import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      result: [],
      clickedRow: {}
    };
  }

  handleInputSearch = value => {
    this.setState({ query: value });
  };

  handleTopState = clickedRow => {
    this.setState(clickedRow);
  };

  fetchSearchResults = () => {
    const query = this.state.query;
    Axios.get("http://localhost:3000/client").then(res => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].cpf === query) {
          this.setState({ result: res.data[i] });
          break;
        }
      }
    });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Search
              search={this.handleInputSearch}
              fetch={this.fetchSearchResults}
              result={this.state.result}
            />
          </Route>
          <Route path="/solicitar">
            <Borrow
              result={this.state.result}
              onClickRow={this.handleTopState}
            />
          </Route>
          <Route path="/pagamento">
            <Payment />
          </Route>
          <Route path="/finalizado">
            <Finished data={this.state.clickedRow} result={this.state.result} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
