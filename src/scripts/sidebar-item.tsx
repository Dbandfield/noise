import React, { Component } from "react";

import { SliderElement } from "./slider";

import ArrowDown from "../img/arrow-down.svg";
import ArrowRight from "../img/arrow-right.svg";

import "../style/SideBarItem.scss";
export interface ISideBarItemProps {
  name: string;
  func: (x: number) => void;
}

export class SideBarItem extends Component<ISideBarItemProps, any> {
  constructor(props: ISideBarItemProps) {
    super(props);

    this.state = {
      active: false,
    };

    this.click = this.click.bind(this);
  }

  public click() {
    this.setState({ active: !this.state.active });
  }

  public render() {
    return (
      <div className="sidebar-item" onClick={this.click}>
        <img
          src={this.state.active ? ArrowDown : ArrowRight}
          width="16px"
          height="16px"
        />
        <p className="sidebar-item-title"> {this.props.name} </p>
        {this.state.active && <SliderElement onInput={this.props.func} />}
      </div>
    );
  }
}
