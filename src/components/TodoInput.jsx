import React from "react";
import styled from "styled-components";

export default function TodoInput() {
  return (
    <InputDiv>
      <input type="text" placeholder="What do you need to do?" />
      <button>ADD</button>
    </InputDiv>
  );
}

// STYLED COMPONENTS
const InputDiv = styled.div`
  display: flex;
  max-width: 1040px;
  width: 90%;
  background: #f1ece6;
  justify-content: space-between;
  margin: 2rem auto;
  border-radius: 50px;

  input {
    border: none;
    outline: none;
    background: #f1ece6;
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 50px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  button {
    background-color: #76b7cd;
    color: #f3f3f3;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 0 50px 50px 0;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
