import React from "react";
import "./CommentItem.css";

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  this.deactivation = this.deactivation.bind(this);
  // this.state = { active: true}
  // this.state = props.commentItem.activity;
  }

  deactivation() {
// console.log(this.state);
// this.setState({ active: false })

    // console.log(!this.props.removeComment.remove);
    this.props.activity()

    // this.props.commentItem.activity = !this.props.commentItem.activity;
    // this.props.remComment();
  }

  render() {

    return (
      <li className="comment-item">
        <p className="comment__text comment__autor">
          {this.props.commentItem.commentAutorName}
          <span>
            {new Date(this.props.commentItem.commentDate).toLocaleString()}
          </span>
        </p>

        <p className="comment__text">{this.props.commentItem.commentText}</p>

        <p className="comment__text text_positives">
          Достоинства: <span>{this.props.commentItem.commentPositives}</span>
        </p>

        <p className="comment__text text_negatives">
          Недостатки: <span>{this.props.commentItem.commentNegatives}</span>
        </p>

        <button
          className="btn__del"
          type="button"
          aria-label="удалить отзыв"
          // onClick = {this.test}
          onClick={this.deactivation}
        >
          &#10006;
        </button>
      </li>
    );
  }
}

export { CommentItem };
