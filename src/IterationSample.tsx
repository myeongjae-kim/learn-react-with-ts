import * as React from "react";

// export interface IIterationSampleProps { }

export interface IIterationSampleState {
  name: string;
  names: string[];
}

class IterationSample extends React.Component<{}, IIterationSampleState> {
  public state = {
    name: "",
    names: ["눈사람", "얼음", "눈", "바람"]
  };

  public render() {
    const nameList = this.state.names.map((name: string, index: number) => (
      // tslint:disable-next-line
      <li key={index} onDoubleClick={() => this.handleRemove(index)}>
        {name}
      </li>
    ));

    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }

  private handleChange = (e: React.SyntheticEvent) => {
    this.setState({
      name: (e.target as HTMLInputElement).value
    });
  };

  private handleInsert = () => {
    this.setState({
      name: "",
      names: this.state.names.concat(this.state.name)
    });
  };

  private handleRemove = (index: number) => {
    this.setState({
      names: this.state.names.filter((item: string, i: number) => i !== index)
    });
  };
}

export default IterationSample;
