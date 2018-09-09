import React, { Component } from "react";

import * as SideBar from "./sidebar";

import { NoiseDisplay } from "./noiseDisplay";

export class Page extends Component {
  protected sideBarItems: SideBar.ISideBarItem[];
  constructor(props: object) {
    super(props);
    this.state = { x: 1, y: 1, time: 1 };

    this.sideBarItems = [
      {
        func: (x: number) => {
          this.onXChange(x);
        },
        id: 0,
        name: "X Scale",
      },

      {
        func: (y: number) => {
          this.onYChange(y);
        },
        id: 1,
        name: "Y Scale",
      },

      {
        func: (time: number) => {
          this.onXChange(time);
        },
        id: 2,
        name: "Time Scale",
      },
    ];
  }

  public onXChange(x: number) {
    this.setState({ x });
  }

  public onYChange(y: number) {
    this.setState({ y });
  }

  public onTimeChange(time: number) {
    this.setState({ time });
  }

  public render() {
    return (
      <>
        <SideBar.SideBar items={this.sideBarItems} />
        <NoiseDisplay />
      </>
    );
  }
}
