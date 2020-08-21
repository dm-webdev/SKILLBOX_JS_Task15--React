import React from 'react';
import './CommentsList.css';
import {CommentItem} from '../CommentItem/CommentItem';


class CommentsList extends React.Component {

  render() {
    const comments = this.props.comments.toolItem.catalog.toolComment;
    return (


      <ul className="comment-list">    
        {comments.map(commentItem => {
          return <CommentItem commentItem={commentItem} key={commentItem.id} />
          })
        }      
      </ul>
    )
  }
}

export {CommentsList};