import React from "react";
import "./CommentRecorder.css";

class CommentRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentAutorName: "",
      commentDate: "",
      commentText: "",
      commentPositives: "",
      commentNegatives: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let date = new Date().toISOString();

    this.setState({
      [name]: value,
      commentDate: date,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let comment = this.state;
    let index = this.props.comments.toolItem.index;
    this.props.comments.toolItem.addComment(index, comment);
    this.setState({
      commentAutorName: "",
      commentDate: "",
      commentText: "",
      commentPositives: "",
      commentNegatives: "",
    });
  }

  render() {
    return (
      <form className="comment-recorder" onSubmit={this.handleSubmit}>
        <h3 className="recorder__header">Оставьте ваш отзыв</h3>

        <label className="recorder__label">
          Ваше имя:
          <input
            type="text"
            className="recorder__input"
            name="commentAutorName"
            placeholder="Как вас зовут?"
            autoFocus
            required
            onChange={this.handleChange}
            value={this.state.commentAutorName}
          />
        </label>

        <label className="recorder__label">
          Опишите ваши впечатления:
          <input
            className="recorder__input"
            placeholder="Ваши впечатления от использования товара."
            name="commentText"
            value={this.state.commentText}
            onChange={this.handleChange}
            required
          />
        </label>

        <label className="recorder__label">
          Опишите достоинства:
          <input
            className="recorder__input"
            placeholder="Что вам понравилось больше всего?"
            name="commentPositives"
            value={this.state.commentPositives}
            onChange={this.handleChange}
          />
        </label>

        <label className="recorder__label">
          Опишите недостатки:
          <input
            className="recorder__input"
            placeholder="Есть ли недостатки?"
            name="commentNegatives"
            value={this.state.commentNegatives}
            onChange={this.handleChange}
          />
        </label>

        <button className="btn recorder__btn" type="submit">
          отправить отзыв
        </button>
      </form>
    );
  }
}

export { CommentRecorder };
