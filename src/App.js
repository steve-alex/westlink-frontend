import React from "react";
import "./App.css";
import { MainContainer } from "../src/containers/MainContainer";
import { NavigationMenu } from "../src/components/NavigationMenu";
import { Banner } from "../src/components/Banner"
import { Route, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Route path="/">
        <Banner />
        <MainContainer history={history} />
        <NavigationMenu history={history} />
      </Route>
    </div>
  );
}

export default App;
