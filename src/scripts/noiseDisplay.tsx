import React, { Component } from "react";
import { connect } from "react-redux";
import Simplex from "simplex-noise";

import { renderNoise } from "./generateNoise";

import "../style/NoiseDisplay.scss";

export interface INoiseDisplayProps {
  time: number;
  x: number;
  y: number;
}

export class NoiseDisplay extends Component<INoiseDisplayProps> {
  protected canvas: React.RefObject<HTMLCanvasElement>;
  protected interval: NodeJS.Timer;
  protected simplex: Simplex;
  constructor(props: INoiseDisplayProps) {
    super(props);
    this.canvas = React.createRef();
    this.simplex = new Simplex();
  }
  public componentDidMount() {
    const self = this;
    self.interval = setInterval(() => {
      self.setState({ time: performance.now() });
      renderNoise(self.canvas.current, 500, 500, self.props.time, this.simplex);
    }, 16);
  }

  public render() {
    return (
      <div className="noise-display">
        <canvas width={500} height={500} ref={this.canvas}>
          noise display
        </canvas>
      </div>
    );
  }
}

interface IState {
  time: number;
  x: number;
  y: number;
  simplex: Simplex;
}

const mapStateToProps = (state: IState): INoiseDisplayProps => {
  return { time: state.time, x: state.x, y: state.y };
};

const mapDispatchToProps = dispatch;=> {
  return onCounter: () => {
    dispatch()
  }
}

export const NoiseDisplayContainer = connect(mapStateToProps)(NoiseDisplay);
