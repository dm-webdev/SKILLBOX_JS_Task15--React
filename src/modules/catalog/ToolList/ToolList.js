import React from "react";
import "./ToolList.css";
import { ToolItem } from "./ToolItem/ToolItem";

class ToolList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { removeId: "" };
    this.showId = this.showId.bind(this);
  }

  showId(index, key) {
    let filter = this.props.catalog[index].toolComment.indexOf(
      this.props.catalog[index].toolComment.find(
        (item) => item.commentDate !== key
      )
    );
    
    let filteredCatalog = this.props.catalog[index].toolComment.splice(filter, 1);

    console.log(filteredCatalog);
  }

  render() {
    console.log(this.props);



    return (



      <ul className="tool-list">
        {this.props.catalog.map((toolItem, index) => {
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
