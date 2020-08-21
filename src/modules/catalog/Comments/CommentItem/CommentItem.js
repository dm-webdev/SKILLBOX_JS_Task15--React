import React from 'react';
import './CommentItem.css';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isCommentDel: true};
    this.commentDel = this.commentDel.bind(this);
  }

  commentDel() {
    this.setState(state => ({
      isCommentDel: !state.isCommentDel
    }));
  }


  render() {
    console.log(this.props);
    return (
      <li className="comment-item">
        <p className="comment__text comment__autor">{this.props.commentItem.commentAutorName}        
        {this.state.isCommentDel ? 'Del' : 'Plus'}
        <span>{new Date(this.props.commentItem.commentDate).toLocaleString()}</span>
        </p>
  
        <p className="comment__text">{this.props.commentItem.commentText}</p>
  
        <p className="comment__text text_positives">Достоинства: <span>{this.props.commentItem.commentPositives}</span></p>
  
        <p className="comment__text text_negatives">Недостатки: <span>{this.props.commentItem.commentNegatives}</span></p>
  
        <button className="btn__del" type="button" aria-label="удалит отзыв" onClick={this.commentDel}>&#10006;</button>
      </li>
    )
  }
}

export {CommentItem};