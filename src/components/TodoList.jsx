import React from "react";
import styled from "styled-components";

export default function TodoList() {
  return (
    <Container>
      <TodoItem>
        <TodoItemLeft>
          <img src="/circle.png" alt="circle" />
          <p>Personal work no1</p>
        </TodoItemLeft>
        <TodoItemRight>
          <img src="/delete-outline.png" alt="delete button" />
        </TodoItemRight>
      </TodoItem>
      <TodoItem>
        <TodoItemLeft>
          <img src="/circle.png" alt="circle" />
          <p>Personal work no1</p>
        </TodoItemLeft>
        <TodoItemRight>
          <img src="/delete-outline.png" alt="delete button" />
        </TodoItemRight>
      </TodoItem>
      <TodoItem>
        <TodoItemLeft>
          <img src="/circle.png" alt="circle" />
          <p>Personal work no1</p>
        </TodoItemLeft>
        <TodoItemRight>
          <img src="/delete-outline.png" alt="delete button" />
        </TodoItemRight>
      </TodoItem>
    </Container>
  );
}

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1040px;
  width: 90%;
  background: #f1ece6;
  margin: 2rem auto;
  border-radius: 50px;
  padding: 1rem 2rem;
  min-height: 50vh;
`;

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #76b7cd;
  border-width: 75%;
`;
const TodoItemLeft = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #323232;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  img {
    cursor: pointer;
    @media (max-width: 768px) {
      height: 30px;
    }
  }
`;
const TodoItemRight = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    @media (max-width: 768px) {
      height: 20px;
    }
  }
`;
