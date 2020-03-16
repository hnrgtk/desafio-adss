import React, { Component } from "react";

import Search from "./components/Search";
import Borrow from "./components/Borrow";

import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      result: []
    };
  }

  handleInputSearch = event => {
    const query = event.target.value;
    this.setState({ query: query });
  };

  fetchSearchResults = () => {
    const query = this.state.query;
    Axios.get("http://localhost:3000/data").then(res => {
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
            <Borrow result={this.state.result} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
