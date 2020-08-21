import React from 'react';
import './CommentsList.css';
import {CommentItem} from '../CommentItem/CommentItem';

function CommentsList(commentsList) {
  const comments = commentsList.comments.toolItem.catalog.toolComment;
  return (
    <ul className="comment-list">    
      {comments.map(commentItem => {
        return <CommentItem commentItem={commentItem} key={commentItem.id} />
        })
      }      
    </ul>
  )
};

export {CommentsList};