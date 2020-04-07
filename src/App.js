import React, { Component } from 'react'
import List from './List'
import './App.css'


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
              className="col-md-8"
              onChange={this.onChangeHandler}
              value={this.state.term}
              type="text"
              placeholder="Add your text here"
            />
          <button className="btn col-md-2" onClick={this.onFormSubmitHandler}>Ekle</button>
        </form>
        
        <List 
        deleteTask={this.onDeleteHandler}
        items={this.state.items}/>
        
      </div>
    )
  }
}

export default App
