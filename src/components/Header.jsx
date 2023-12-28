import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <img src="/To-Do-Logo 1.png" alt="logo" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f1ece6;
`;
