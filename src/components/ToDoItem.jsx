import React, { Component } from "react";
import styled from "styled-components";

const Li = styled.li`
  background-color: ${(props) => props.theme.hover};
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
  margin: 0.5rem 0;

  &:hover > button {
    display: inline-block;
  }
`;

const Span = styled.span`
  padding: 0.5rem 1rem;
  padding-right: 3rem;
  display: block;
  text-align: left;
`;

const Button = styled.button`
  display: none;
  border: none;
  position: absolute;
  width: 3rem;
  right: 0;
  top: 0;
  bottom: 0;
  color: ${(props) => props.theme.danger};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.danger};
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

class ToDoItem extends Component {
  render() {
    return (
      <Li>
        <Span className="item">{this.props.item}</Span>
        <Button onClick={() => this.props.onDelete(this.props.item)}>
          Del
        </Button>
      </Li>
    );
  }
}

export default ToDoItem;
