import * as React from "react";
import { Component } from "react";

// export interface IEventPracticeProps {}

export interface IEventPracticeState {
  message: string;
  username: string;
}

class EventPractice extends Component<{}, IEventPracticeState> {
  public state = {
    message: "",
    username: ""
  };

  public render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }

  private handleChange = (e: React.SyntheticEvent) => {
    const elem = e.target as HTMLInputElement;
    this.setState({
      [elem.name]: elem.value
    } as Pick<IEventPracticeState, keyof IEventPracticeState>);
  };

  private handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      message: "",
      username: ""
    });
  };

  private handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
}

export default EventPractice;
