import * as React from "react";
import "./App.css";

import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <EventPractice />
        <MyComponent age={4} />
      </React.Fragment>
    );
  }
}

export default App;
