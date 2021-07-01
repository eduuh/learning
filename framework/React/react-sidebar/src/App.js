import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Overview from "./Pages/Overview"

function App() {
    return (
    <Router>
        <Sidebar />
      <Switch>
        <Route path='/overview'exact component={Overview}/>
      </Switch>
    </Router>
    )
}

export default App;
