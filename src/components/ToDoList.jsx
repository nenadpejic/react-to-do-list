import React, { Component } from "react";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";

const Div = styled.div`
  position: relative;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border: none;
  width: 3rem;
  color: ${(props) => props.theme.mainDark};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.mainDark};
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

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
        <ul>
          {this.state.items.map((item, index) => (
            <ToDoItem key={index} item={item} onDelete={this.handleDelete} />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <Div>
            <Input type="text" id="inputText" />
            <Button type="submit">Add</Button>
          </Div>
        </form>
      </div>
    );
  }
}

export default ToDoList;
