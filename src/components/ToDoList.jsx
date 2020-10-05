import React, { Component } from "react";
import styled, { css } from "styled-components";
import ToDoItem from "./ToDoItem";

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 1rem;
`;

const Div = styled.div`
  ${(props) =>
    props.input &&
    css`
      position: relative;
      margin: 0.5rem 0;
      border-radius: 0.25rem;
      overflow: hidden;
    `}
  ${(props) =>
    props.window &&
    css`
      max-width: 400px;
      height: calc(100vh - 21rem);
      overflow-y: auto;
    `}
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  position: relative;
  width: 100%;

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
    let input = document.querySelector("#inputText");
    if (input.value !== "" && input.value !== null) {
      let items = [...this.state.items];
      items.push(input.value);
      this.setState({ items });
      input.value = "";
    }
  };

  handleDelete = (event) => {
    const items = [...this.state.items].filter((item) => item !== event);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Div input>
            <Input
              type="text"
              id="inputText"
              placeholder="Add item"
              autoComplete="off"
            />
            <Button type="submit">Add</Button>
          </Div>
        </form>
        <Div window>
          <Ul>
            {this.state.items.map((item, index) => (
              <ToDoItem key={index} item={item} onDelete={this.handleDelete} />
            ))}
          </Ul>
        </Div>
      </div>
    );
  }
}

export default ToDoList;
