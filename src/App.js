import React from 'react';

import TodoCard from './components/TodoCard.js'
import Input from './components/Input.js'
import Waves from './components/Waves.js'

import todos from './data.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
      data: todos
    }
    this.markTodo = this.markTodo.bind(this)
    this.handleAdding = this.handleAdding.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  deleteTodo(id) {
    this.setState(prevState => {
      const updatedState = prevState.data.map(todo => {
        if (todo.id !== id)
          return todo
        else
          console.log(id)
      }).filter(todo => todo !== undefined)
      return { data: updatedState }
    })
  }

  markTodo(id) {
    this.setState(prevState => {
      const updatedState = prevState.data.map(todo => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed
          }
        return todo
      })
      return {
        data: updatedState
      }
    })
  }

  handleTyping(e) {
    this.setState({ text: e.target.value })
  }

  handleAdding(e) {
    e.preventDefault()
    if (this.state.text.trim().length !== 0)

      this.setState(prevState => {
        const updatedState = prevState.data.concat({
          id: Date.now(),
          text: prevState.text,
          completed: false
        })

        return { text: '', data: updatedState }
      })
  }

  render() {

    const todoComponents = this.state.data
      .map(card => <TodoCard
        key={card.id}
        data={card}
        markTodo={this.markTodo}
        className="listContainer"
        deleteTodo={this.deleteTodo} />
      )

    return (
      <div className="app">
        <Waves />

        <div className="wrapper">

          <Input
            handleTyping={this.handleTyping}
            handleAdding={this.handleAdding}
            text={this.state.text} />

          <div className="listContainer">{todoComponents}</div>

        </div>
      </div>
    )
  }
}

export default App;
