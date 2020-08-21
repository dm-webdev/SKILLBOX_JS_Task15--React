import React from "react";
import "./ToolList.css";
import { ToolItem } from "./ToolItem/ToolItem";

class ToolList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul className="tool-list">
        {this.props.catalog.map((toolItem) => {
          return <ToolItem catalog={toolItem} key={toolItem.id} />;
        })}
      </ul>
    );
  }
}

export { ToolList };
