import * as React from "react";
import "./App.css";

import MyComponent from "./MyComponent";

class App extends React.Component {
  public render() {
    return <MyComponent age={4} />;
  }
}

export default App;
