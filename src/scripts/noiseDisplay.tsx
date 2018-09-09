import React, { Component } from "react";

import { renderNoise } from "./generateNoise";

export class NoiseDisplay extends Component {
  protected canvas: React.RefObject<HTMLCanvasElement>;
  constructor(props: object = {}) {
    super(props);
    this.canvas = React.createRef();
  }
  public componentDidMount() {
    renderNoise(this.canvas.current, 1000, 1000);
  }

  public render() {
    return (
      <div>
        <canvas width={1000} height={1000} ref={this.canvas}>
          noise display
        </canvas>
      </div>
    );
  }
}
