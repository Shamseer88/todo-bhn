import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [personalTodos, setPersonalTodos] = useState([]);
  const [professionalTodo, setProfessionalTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("Personal");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const fetchTodosFromAPI = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await response.json();
      localStorage.setItem("personalTodos", JSON.stringify(data));
      setPersonalTodos(data);
    } catch (error) {
      console.log("Error fetching Todos from API", error);
    }
  };

  const addTodo = (newTodo) => {
    let updatedTodos = [...personalTodos, newTodo];
    setPersonalTodos(updatedTodos);
    localStorage.setItem("personalTodos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    // Get todos from local storage on component mount
    const storedTodos = JSON.parse(localStorage.getItem("personalTodos")) || [];

    // Fetch from API only if local storage is empty
    if (storedTodos.length > 0) {
      setPersonalTodos(storedTodos);
    } else {
      fetchTodosFromAPI();
    }
  }, []);

  return (
    <div>
      <Header />
      <Tabs toggleTab={toggleTab} activeTab={activeTab} />
      <TodoInput addTodo={addTodo} />
      <TodoList
        personalTodos={personalTodos}
        setPersonalTodos={setPersonalTodos}
        showPersonal={activeTab === "Personal"}
      />
    </div>
  );
}
