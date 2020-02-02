import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  //changing title in the state
  onChangeTxt = e => this.setState({ title: e.target.value });

  //submitting a todo
  AddTodo = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.AddTodo} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo...."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChangeTxt}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
