import * as React from "react";
import { Component } from "react";

// export interface IEventPracticeProps {}

export interface IEventPracticeState {
  message: string;
}

class EventPractice extends Component<{}, IEventPracticeState> {
  public state = {
    message: ""
  };

  public render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }

  private handleChange = (e: any) => {
    this.setState({
      message: e.target.value
    });
  };

  private handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ""
    });
  };
}

export default EventPractice;
