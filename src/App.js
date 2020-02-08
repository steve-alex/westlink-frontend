import React from "react";
import "./App.css";
import { MainContainer } from "../src/containers/MainContainer";
import { NavigationMenu } from "../src/components/NavigationMenu";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <MainContainer />
        <NavigationMenu />
      </Route>
    </div>
  );
}

export default App;
