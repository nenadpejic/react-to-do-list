import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  state = {
    items: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const value = document.querySelector("#inputText").value;
    if (value !== "" || value !== null) {
      let items = [...this.state.items];
      items.push(value);
      this.setState({ items });
    }
  };

  handleDelete = (event) => {
    const items = [...this.state.items].filter((item) => item !== event);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item, index) => (
          <ToDoItem key={index} item={item} onDelete={this.handleDelete} />
        ))}
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="inputText" />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ToDoList;
