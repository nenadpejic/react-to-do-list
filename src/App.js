import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To-do List</h1>
      </header>
      <main className="App-main">
        <ToDoList />
      </main>
      <footer className="App-footer">
        <p>Created by Nenad Pejic</p>
      </footer>
    </div>
  );
}

export default App;
