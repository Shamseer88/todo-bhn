import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [personalTodos, setPersonalTodos] = useState([]);
  const fetchTodosFromAPI = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await response.json();
      setPersonalTodos(data);
      localStorage.setItem("personalTodos", JSON.stringify(personalTodos));
    } catch (error) {
      console.log("Error fetching Todos from API", error);
    }
  };

  useEffect(() => {
    fetchTodosFromAPI();
  }, []);

  return (
    <div>
      <Header />
      <Tabs />
      <TodoInput />
      <TodoList personalTodos={personalTodos} />
    </div>
  );
}
