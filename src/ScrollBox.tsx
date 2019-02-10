import * as React from "react";

// export interface IScrollBoxProps {}

// export interface IScrollBoxState {}

class ScrollBox extends React.Component<{}, {}> {
  public box: HTMLDivElement;

  public render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      overflow: "auto",
      position: "relative",
      width: "300px"
    } as React.CSSProperties;

    const innerStyle = {
      background: "linear-gradient(white, black)",
      height: "650px",
      width: "100%"
    } as React.CSSProperties;

    return (
      <div
        style={style}
        ref={(ref: HTMLDivElement) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }

  public scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };
}

export default ScrollBox;
