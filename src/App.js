import React from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Form />

        <h1>Todo List</h1>
        <List />
      </div>
    );
  }
}

export default App;
