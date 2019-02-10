import * as React from "react";

export interface ILifeCycleSampleProps {
  color: string;
  number: number;
}

export interface ILifeCycleSampleState {
  color: string;
  number: number;
}

class LifeCycleSample extends React.Component<
  ILifeCycleSampleProps,
  ILifeCycleSampleState
> {
  public static defaultProps = {
    color: "",
    number: 0
  };

  public static getDerivedStateFromProps(
    nextProps: ILifeCycleSampleProps,
    prevState: ILifeCycleSampleState
  ) {
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  public myRef: HTMLHeadingElement;
  public state = { number: 0, color: "" };

  constructor(props: ILifeCycleSampleProps) {
    super(props);
    console.log("constructor");
  }

  public componentDidMount() {
    console.log("componentDidMount");
  }

  public shouldComponentUpdate(
    nextProps: ILifeCycleSampleProps,
    nextState: ILifeCycleSampleState
  ) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  public componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  public getSnapshotBeforeUpdate(
    prevProps: ILifeCycleSampleProps,
    prevState: ILifeCycleSampleState
  ) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  public componentDidUpdate(
    prevProps: ILifeCycleSampleProps,
    prevState: ILifeCycleSampleState,
    snapshot: string | null
  ) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상: ", snapshot);
    }
  }

  public render() {
    console.log("render");
    const style = {
      color: this.props.color
    };
    return (
      <div>
        <h1 style={style} ref={(ref: HTMLHeadingElement) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

  private handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
}

export default LifeCycleSample;
