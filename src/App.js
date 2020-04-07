import React, { Component } from 'react'
import List from './List'


class App extends Component {

  state = {
    term: "",
    items: []
  }

  onChangeHandler = e => {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmitHandler = e => {
      e.preventDefault();
      this.setState({
        term:"",
        items: [...this.state.items, this.state.term]
      })
  }

  onDeleteHandler = index => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({
      items: deleteTask
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmitHandler}>
        <h1>Todo App by Murat Menzilci</h1>
          <p>Yapmak istediğin şey nedir?</p>
          <input
              className="input"
              onChange={this.onChangeHandler}
              value={this.state.term}
              type="text"
              placeholder="Add your text here"
            />
          <button className="btn" onClick={this.onFormSubmitHandler}>+</button>
        </form>
        
        <List 
        deleteTask={this.onDeleteHandler}
        items={this.state.items}/>
        
      </div>
    )
  }
}

export default App
