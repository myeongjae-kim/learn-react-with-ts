import * as React from "react";
import "./ValidationSample.css";

// export interface IValidationSampleProps {}

export interface IValidationSampleState {
  password: string;
  clicked: boolean;
  validated: boolean;
}

class ValidationSample extends React.Component<{}, IValidationSampleState> {
  public state = { password: "", clicked: false, validated: false };
  public input: HTMLInputElement;

  public render() {
    return (
      <div>
        <input
          ref={(ref: HTMLInputElement) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }

  private handleChange = (e: React.SyntheticEvent) => {
    this.setState({
      password: (e.target as HTMLInputElement).value
    });
  };

  private handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.focus();
  };
}

export default ValidationSample;
