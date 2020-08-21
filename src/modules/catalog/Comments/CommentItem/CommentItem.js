import React from 'react';
import './CommentItem.css';

function CommentItem(commentItem) {
  return (
    <li className="comment-item">
      <p className="comment__text comment__autor">{commentItem.commentItem.commentAutorName}
      <span>{new Date(commentItem.commentItem.commentDate).toLocaleString()}</span>
      </p>

      <p className="comment__text">{commentItem.commentItem.commentText}</p>

      <p className="comment__text text_positives">Достоинства: <span>{commentItem.commentItem.commentPositives}</span></p>

      <p className="comment__text text_negatives">Недостатки: <span>{commentItem.commentItem.commentNegatives}</span></p>

      <button className="btn__del" type="button" aria-label="удалит отзыв">&#10006;</button>
    </li>
  )
};

export {CommentItem};