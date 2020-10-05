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
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 1.5rem;
    fill: ${(props) => props.theme.mainDark};
  }
  &:hover > svg {
    fill: #fff;
  }

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
            <Button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341 c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659S472.341,136.705,472.341,256S375.295,472.341,256,472.341z" />
                  <path d="M355.148,234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83,8.884-19.83,19.83v79.318h-79.318 c-10.966,0-19.83,8.884-19.83,19.83s8.864,19.83,19.83,19.83h79.318v79.318c0,10.946,8.864,19.83,19.83,19.83 s19.83-8.884,19.83-19.83v-79.318h79.318c10.966,0,19.83-8.884,19.83-19.83S366.114,234.386,355.148,234.386z" />
                </g>
              </svg>
            </Button>
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
