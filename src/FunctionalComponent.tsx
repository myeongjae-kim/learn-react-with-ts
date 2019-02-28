import * as React from "react";

export interface IFunctionalComponentProps {
  name: string;
}

// SFC is an abbreviation of Stateless Functional Component
const FunctionalComponent: React.SFC<IFunctionalComponentProps> = ({
  name
}) => <div>Stateless Functional Component {name}</div>;

export default FunctionalComponent;
