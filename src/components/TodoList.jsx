import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function TodoList({
  personalTodos,
  setPersonalTodos,
  showPersonal,
}) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    // Initialize completedTodos from local storage on component mount
    const storedCompletedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    setCompletedTodos(storedCompletedTodos);
  }, []);

  const markAsCompleted = (todoId) => {
    // Find the todo with the given ID
    const todo = personalTodos.find((t) => t.id === todoId);
    if (!todo) return;

    // Update the todo to mark it as completed
    todo.completed = true;

    // Update personalTodos
    const updatedTodos = personalTodos.map((t) => (t.id === todoId ? todo : t));
    setPersonalTodos(updatedTodos);
    localStorage.setItem("personalTodos", JSON.stringify(updatedTodos));

    // Update completedTodos
    setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, todo]);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify([...completedTodos, todo])
    );
  };

  const deleteAllCompleted = () => {
    const remainingTodos = personalTodos.filter((todo) => !todo.completed);
    setPersonalTodos(remainingTodos);
    localStorage.setItem("personalTodos", JSON.stringify(remainingTodos));

    setCompletedTodos([]);
    localStorage.setItem("completedTodos", JSON.stringify([]));
  };

  const deleteTodo = (todoId) => {
    // Filter out the todo with the given ID
    const updatedTodos = personalTodos.filter((todo) => todo.id !== todoId);

    // Update personalTodos state
    setPersonalTodos(updatedTodos);

    // Update local storage
    localStorage.setItem("personalTodos", JSON.stringify(updatedTodos));
  };

  return (
    <Container>
      {showPersonal &&
        personalTodos.map((todo) => (
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
              <img
                src="/delete-outline.png"
                alt="delete button"
                onClick={() => deleteTodo(todo.id)}
              />
            </TodoItemRight>
          </TodoItem>
        ))}

      <ClearCompleted onClick={deleteAllCompleted}>
        <img src="/delete-all.png" alt="clear all button image" />
        <p>Clear Completed</p>
      </ClearCompleted>
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

const ClearCompleted = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 2rem;
  justify-content: flex-end;
  cursor: pointer;
  p {
    font-size: 24px;
    color: #d98326;
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
  img {
    @media (max-width: 768px) {
      height: 15px;
    }
  }
`;
