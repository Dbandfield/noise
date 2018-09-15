import React, { Component } from "react";

import { SideBarItem } from "./sidebar-item";

import "../style/SideBar.scss";

export interface ISideBarItem {
  id: number;
  func: (n: number) => void;
  name: string;
}

export interface ISideBarProps {
  items: ISideBarItem[];
}

export class SideBar extends Component<ISideBarProps, any> {
  constructor(props: ISideBarProps) {
    super(props);

    this.state = {
      items: this.props.items,
    };

    this.generateSideBarItemJSX = this.generateSideBarItemJSX.bind(this);
  }

  public render() {
    return (
      <div className="side-bar">
        <ul>{this.state.items.map(this.generateSideBarItemJSX)}</ul>
      </div>
    );
  }

  protected generateSideBarItemJSX(item: ISideBarItem) {
    return (
      <li key={item.id.toString()}>
        <SideBarItem name={item.name} func={item.func} />
      </li>
    );
  }
}
