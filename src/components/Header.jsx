import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <img src="/To-Do-Logo 1.png" alt="logo" />
    </StyledHeader>
  );
}

// STYLED COMPONENTS
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f1ece6;
  img {
    @media (max-width: 768px) {
      height: 50px;
    }
  }
`;
