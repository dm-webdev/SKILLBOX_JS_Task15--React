import React from "react";
import "./BtnGroup.css";

class BtnGroup extends React.Component {
  render() {
    return (
      <div className="btn-group">
        <button className="btn" type="button">
          показать/скрыть отзывы 
          <span className="count">{this.props.toolItem.catalog.toolComment.length}</span>
        </button>

        <button className="btn" type="button">
          купить
        </button>
      </div>
    );
  }
}


export { BtnGroup };
