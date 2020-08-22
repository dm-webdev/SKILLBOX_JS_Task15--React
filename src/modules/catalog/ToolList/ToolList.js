import React from "react";
import "./ToolList.css";
import bd from "../../../assets/database";
import { ToolItem } from "./ToolItem/ToolItem";

const catalog = bd;

class ToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { catalog };
    this.removeComment = this.removeComment.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  removeComment(index, key) {
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

  addComment(index, comment) {
    let replCatalog = this.state.catalog[index].toolComment.push(comment);
    this.setState(() => {
      return { removeId: replCatalog };
    });
  }

  render() {
    return (
      <ul className="tool-list">
        {this.state.catalog.map((toolItem, index) => {
          return (
            <ToolItem
              catalog={toolItem}
              key={toolItem.id}
              index={index}
              showId={this.removeComment}
              addComment={this.addComment}
            />
          );
        })}
      </ul>
    );
  }
}

export { ToolList };
