import React, { Component } from 'react';
import './App.css';
import List from './components/list'
import AddTodo from './components/AddTodo'
import HeaderTodo from './components/HeaderTodo.js'
import Intro from './components/Intro'
import AddName from './components/AddName'

class App extends Component {
  
  constructor(){
    super()

    this.state = {
      todos: [],
      userName: ''

    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.addUsername = this.addUsername.bind(this)
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

  deleteTodo(id){
    console.log(id)

    const todos = this.state.todos.filter(todo => todo.id !== id)

    this.setState({ todos })
  }

  addUsername(name){
      console.log(name)

      const theName = {
        name
      }

      this.state.userName = theName

      this.setState({userName: this.state.userName})
  }

  render() {
    return (
      <div className="App">

        <HeaderTodo /> 
        <Intro userName={this.state.userName} />
        <AddName addUsername={this.addUsername} userName={this.state.userName} />
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />

      </div>
    );
  }
}

export default App;
