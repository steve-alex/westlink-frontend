import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "./pages.scss";

export const HomePage = () => {
  const [selected, setSelected] = useState(undefined);

  return (
    <div className="homePageContainer">
      {!selected && (
        <div className="homePage">
          <p>Hello User, welcome to West housing association</p>
          <p>How can we help today?</p>
          <Button
            color="orange"
            inverted
            className="homePageButton"
            onClick={() => setSelected(true)}
          >
            Report an issue
          </Button>
        </div>
      )}
      {selected && <Redirect to="/create-issue" />}
    </div>
  );
};
