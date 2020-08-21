import React from 'react';
import './Comments.css';
import {CommentRecorder} from './CommentRecorder/CommentRecorder';
import {CommentsList} from './CommentsList/CommentsList';

function Comments(toolItem) {
  return (
    <section className="comments">
      <h2 className="сomments__header">отзывы</h2>

      <CommentRecorder comments={toolItem}/>

      <CommentsList comments={toolItem}/>
    </section>
  )
};

export {Comments};