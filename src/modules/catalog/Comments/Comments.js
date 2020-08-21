import React from 'react';
import './Comments.css';
import {CommentRecorder} from './CommentRecorder/CommentRecorder';
import {CommentsList} from './CommentsList/CommentsList';

class Comments extends React.Component {





  render() {
    // console.log(this.props.isShowComments.isShowComments)
    return (
      (this.props.isShowComments.isShowComments) ? (
      <section className="comments">
        <h2 className="сomments__header">отзывы</h2>
  
        <CommentRecorder comments={this.props}/>
  
        <CommentsList comments={this.props}/>
      </section>
    ) : null
    )
  }
}

export {Comments};