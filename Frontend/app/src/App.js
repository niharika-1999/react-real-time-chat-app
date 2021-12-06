import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from "classnames";
import "../src/styles/styles.scss";

import Chat from "./pages/Chat";
import Join from "./pages/Join";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site_loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      site_loaded: true,
    });
  }

  render() {
    return (
      <div
        className={classNames({
          App: true,
          site_loaded: this.state.site_loaded,
        })}
      >
        <Router>
          <Switch>
            <Route path="/chat/:name/:room" component={Chat} />
            <Route path="/" component={Join} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;