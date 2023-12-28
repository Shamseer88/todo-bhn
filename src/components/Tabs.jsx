import React from "react";
import styled from "styled-components";

export default function Tabs({ toggleTab, activeTab }) {
  return (
    <StyledTabs>
      <Button
        className={activeTab === "Personal" ? "active" : ""}
        onClick={() => toggleTab("Personal")}
      >
        Personal
      </Button>
      <Button
        className={activeTab === "Professional" ? "active" : ""}
        onClick={() => toggleTab("Professional")}
      >
        Professional
      </Button>
    </StyledTabs>
  );
}

// STYLED COMPONENTS
const StyledTabs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 2rem;
  background-color: #f3f3f3;
  cursor: pointer;
  &.active {
    border-bottom: 4px solid #d98326;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
