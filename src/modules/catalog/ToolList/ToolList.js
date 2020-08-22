import React from "react";
import "./ToolList.css";
import bd from "../../../assets/database";
import { ToolItem } from "./ToolItem/ToolItem";

const catalog = bd;

class ToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { catalog };
    this.showId = this.showId.bind(this);
  }

  showId(index, key) {
    let filter = this.state.catalog[index].toolComment.indexOf(
      this.state.catalog[index].toolComment.find(
        (item) => item.commentDate === key
      )
    );

    let filteredCatalog = this.state.catalog[index].toolComment.splice(
      filter,
      1
    );

    this.setState(() => {
      return { removeId: filteredCatalog };
    });
  }

  render() {
    console.log(this.state);

    return (
      <ul className="tool-list">
        {this.state.catalog.map((toolItem, index) => {
          return (
            <ToolItem
              catalog={toolItem}
              key={toolItem.id}
              index={index}
              showId={this.showId}
            />
          );
        })}
      </ul>
    );
  }
}

export { ToolList };
