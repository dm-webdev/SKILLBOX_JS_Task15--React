import React from "react";
import "./ToolItem.css";
import { ToolCard } from "../ToolCard/ToolCard";
import { Comments } from "../../Comments/Comments";
import { BtnGroup } from "../../BtnGroup/BtnGroup";

class ToolItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowComments: false };
    this.showComments = this.showComments.bind(this);
  }

  showComments(isShow) {
    this.setState({
      isShowComments: isShow,
    });
  }

  render() {
    return (
      <li className="tool-item">
        <ToolCard toolItem={this.props} />

        <Comments toolItem={this.props} isShowComments={this.state} />

        <BtnGroup
          toolItem={this.props}
          showComment={this.showComments}
          isShowComments={this.state}
        />
      </li>
    );
  }
}

export { ToolItem };
