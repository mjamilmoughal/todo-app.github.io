import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=12")
      .then(res => res.json())
      .then(result => {
        this.setState({
          todos: result
        });
      });
  }
  //mark todo as complete by toggling it
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //delete todo
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id != id)]
    });
  };

  //adding a new todo
  submitTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));

    // if (title != "") {
    //   let max_id = 0;
    //   for (var i = 0; i < this.state.todos.length; i++) {
    //     if (this.state.todos[i].id > max_id) {
    //       max_id = this.state.todos[i].id;
    //     }
    //   }
    //   const newTodo = {
    //     id: max_id + 1,
    //     title: title,
    //     isCompleted: false
    //   };
    // }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo AddTodo={this.submitTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
