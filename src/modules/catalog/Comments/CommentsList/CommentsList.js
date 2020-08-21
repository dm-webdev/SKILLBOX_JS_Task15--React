import React from "react";
import "./CommentsList.css";
import { CommentItem } from "../CommentItem/CommentItem";
// import PropTypes from "prop-types";

class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.deactivation = this.deactivation.bind(this);
    this.state = { active: true };
  }

  // const comments = this.props.comments.toolItem.catalog.toolComment;

  deactivation(active) {
    const comments = this.props.comments.toolItem.catalog.toolComment;

    console.log(this.props);
    console.log(this.state);
    
    const t = "2020-07-14T12:45:01.000Z";
    let b = comments.find(item => item.commentDate === t);
    console.log(b);
    let v = comments.indexOf(b);
    console.log(v);
    comments = comments.splice(v, 1);
  }

  render() {
    
    const comments = this.props.comments.toolItem.catalog.toolComment;
    console.log(typeof(comments[0].commentDate))



    // const commentsFilter = comments.filter(
      // console.log(item.activity)
      // (item) => item.activity === true
    // );
    console.log(comments);
    // console.log(commentsFilter);
    return (
      <ul className="comment-list">
        {/* {console.log(this.state)} */}

        {comments.map((commentItem) => {
          return (
            <CommentItem
              commentItem={commentItem}
              key={commentItem.commentDate}
              activity = {this.deactivation}


            />
          );
        })}
      </ul>
    );
  }
}

// CommentItem.propTypes = {
//   remove: PropTypes.bool,
// };

export { CommentsList };
