import { useState } from "react";
import styled from "styled-components";

export default function TodoList({ personalTodos }) {
  const [completedTodos, setCompletedTodos] = useState(
    JSON.parse(localStorage.getItem("completedTodos")) || []
  );

  const markAsCompleted = (todoId) => {
    // Find the todo with the given ID
    const todo = personalTodos.find((t) => t.id === todoId);
    if (!todo) return;

    // Remove the todo from the personalTodos
    const updatedTodos = personalTodos.filter((t) => t.id !== todoId);
    todo.completed = true;

    // Update local storage for personalTodos
    localStorage.setItem("personalTodos", JSON.stringify(updatedTodos));

    // Add the todo to completed todos
    setCompletedTodos([...completedTodos, todo]);

    localStorage.setItem(
      "completedTodos",
      JSON.stringify([...completedTodos, todo])
    );
  };

  return (
    <Container>
      {personalTodos.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoItemLeft>
            {todo.completed ? (
              <img src="/check-circle.png" alt="checked circle" />
            ) : (
              <img
                src="/circle.png"
                alt="circle"
                onClick={() => markAsCompleted(todo.id)}
              />
            )}
            <p className={todo.completed ? "completed" : ""}>{todo.title}</p>
          </TodoItemLeft>
          <TodoItemRight>
            <img src="/delete-outline.png" alt="delete button" />
          </TodoItemRight>
        </TodoItem>
      ))}
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
    &.completed {
      text-decoration: line-through;
      color: #c2c2c2;
    }
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
