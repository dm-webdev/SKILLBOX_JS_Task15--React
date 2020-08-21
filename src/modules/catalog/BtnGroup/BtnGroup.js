import React from "react";
import "./BtnGroup.css";
import "./Window.css";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.showComments = this.showComments.bind(this);
    this.state = { buy: false };
  }

  showComments() {
    this.props.showComment(!this.props.isShowComments.isShowComments);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="btn-group">
        <button className="btn" type="button" onClick={this.showComments}>
          {this.props.isShowComments.isShowComments
            ? "скрыть отзывы"
            : "показать"}
          <span className="count">
            {this.props.toolItem.catalog.toolComment.length}
          </span>
        </button>

        <button
          className="btn"
          type="button"
          onClick={() => this.setState({ buy: true })}
        >
          купить
        </button>

        {this.state.buy && (
          <div className="window">
            <div className="frame">
              <h2>Купи что нибудь</h2>
              <button
                className="btn"
                onClick={() => this.setState({ buy: false })}
              >
                закрыть
              </button>
            </div>
          </div>          
        )}
      </div>
    );
  }
}

export { BtnGroup };
