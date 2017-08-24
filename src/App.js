import React, { Component } from 'react';
import './App.css';
import List from './components/list'
import AddTodo from './components/AddTodo'

class App extends Component {
  
  constructor(){
    super()

    this.state = {
      todos: []

    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addTodo(text){
    console.log(text)

    const todo = {

      id: Math.random(),
      text
    }

    this.state.todos.push(todo)

    this.setState({todos: this.state.todos})
  }

  deleteTodo(){

  }

  render() {
    return (
      <div className="App">
        
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} />

      </div>
    );
  }
}

export default App;
