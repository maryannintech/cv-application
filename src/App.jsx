import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CVForm from "./components/CVForm";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/cvform" component={CVForm} />
        </Switch>
      </Router>
    </div>
  );
}
