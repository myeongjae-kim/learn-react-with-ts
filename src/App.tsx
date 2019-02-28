import * as React from "react";
import "./App.css";

import EventPractice from "./EventPractice";
import FunctionalComponent from "./FunctionalComponent";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import MyComponent from "./MyComponent";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

interface IAppState {
  color: string;
}

class App extends React.Component<{}, IAppState> {
  public state = {
    color: "#000000"
  };

  public scrollBox: ScrollBox;

  public render() {
    return (
      <React.Fragment>
        <FunctionalComponent name="이름이다" />
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
        <IterationSample />
        <ScrollBox ref={(ref: ScrollBox) => (this.scrollBox = ref)} />
        <button onClick={this.scrollToBottom}>맨 밑으로</button>
        <ValidationSample />
        <EventPractice />
        <MyComponent age={4} />
      </React.Fragment>
    );
  }

  private scrollToBottom = () => {
    this.scrollBox.scrollToBottom();
  };

  private getRandomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }

  private handleClick = () => {
    this.setState({
      color: this.getRandomColor()
    });
  };
}

export default App;
