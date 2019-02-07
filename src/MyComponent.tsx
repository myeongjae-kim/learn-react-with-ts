import * as React from "react";

interface IMyComponentProps {
  name: string;
  age: number;
}

interface IMyComponentStates {
  number: number;
}

class MyComponent extends React.Component<
  IMyComponentProps,
  IMyComponentStates
> {
  public static defaultProps = {
    name: "기본 이름"
  };

  public state = {
    number: 0
  };

  public render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
        <p>저는 {this.props.age}살 입니다.</p>
        <p>숫자: {this.state.number}</p>
        <button onClick={this.increaseNumber}>더하기</button>
      </div>
    );
  }

  private increaseNumber = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
}

export default MyComponent;
