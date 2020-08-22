import React from "react";
import "./CommentsList.css";
import { CommentItem } from "../CommentItem/CommentItem";

class CommentsList extends React.Component {
  render() {
    const comments = this.props.comments.toolItem.catalog.toolComment;
    console.log(this.props);

    return (
      <ul className="comment-list">
        {this.props.comments.toolItem.catalog.toolComment.length === 0 ? (
          <p className="message">К сожалению, отзывы отсутствуют</p>
        ) : (
          ""
        )}

        {comments.map((commentItem) => {
          return (
            <CommentItem
              commentItem={commentItem}
              key={commentItem.commentDate}
              removeComment={this.props}
            />
          );
        })}
      </ul>
    );
  }
}

export { CommentsList };
