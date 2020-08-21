import React from 'react';
import './CommentItem.css';

class CommentItem extends React.Component {

  render() {
    return (
      <li className="comment-item">
        <p className="comment__text comment__autor">{this.props.commentItem.commentAutorName}
        <span>{new Date(this.props.commentItem.commentDate).toLocaleString()}</span>
        </p>
  
        <p className="comment__text">{this.props.commentItem.commentText}</p>
  
        <p className="comment__text text_positives">Достоинства: <span>{this.props.commentItem.commentPositives}</span></p>
  
        <p className="comment__text text_negatives">Недостатки: <span>{this.props.commentItem.commentNegatives}</span></p>
  
        <button className="btn__del" type="button" aria-label="удалит отзыв">&#10006;</button>
      </li>
    )
  }
}

export {CommentItem};