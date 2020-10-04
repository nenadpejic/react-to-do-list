import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    return (
      <div>
        <span className="item">{this.props.item}</span>
        <button onClick={() => this.props.onDelete(this.props.item)}>
          Delete
        </button>
      </div>
    );
  }
}

export default ToDoItem;
