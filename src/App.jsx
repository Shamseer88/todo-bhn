import React from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <TodoInput />
      <TodoList />
    </div>
  );
}
