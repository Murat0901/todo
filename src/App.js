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

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmitHandler}>
          Yapmak istediğin şey nedir?
          <input
              onChange={this.onChangeHandler}
              type="text"
            />
        </form>
        <List items={this.state.items}/>
      </div>
    )
  }
}

export default App
