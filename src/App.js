import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import QuestionContainer from "./Components/QuestionContainer";
import CalculationContainer from "./Components/CalculationContainer";
import SuccessContainer from "./Components/SuccessContainer";
import TreespaceContainer from "./Components/TreespaceContainer";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <BrowserRouter>
        <Switch>
        <Route exact path="/result/:userId" component={CalculationContainer} />
        <Route exact path="/" render={() => <Redirect to="/questions" />} />
        <Route exact path="/questions" component={QuestionContainer} />
        <Route exact path="/success" component={SuccessContainer} />
        </Switch>
      </BrowserRouter>
      <TreespaceContainer />
    </div>
  );
}

export default App;
