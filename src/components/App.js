import React, { Component } from 'react';

import Header from './Header';
import AddItem from './AddItem';
import PlannerGrid from './PlannerGrid';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      item: '',
      todayItems: [],
      tomorrowItems: [],
      dayAfterTomorrowItems: [],
      username: 'Jon Snow'
    }
  }

  // Update item when changes occur
  handleInputChanges = event => {
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.item) {
      this.setState(prevState => {
        return {
          item: "",
          todayItems: prevState.todayItems.concat(prevState.item)
        }
      })
    }
  }

  render() {
    let username = this.state.username;
    let item = this.state.item;
    
    return (
      <div className="app-container">
        <Header username={username} />
        <AddItem 
          item={item}
          handleInputChanges={this.handleInputChanges}
          handleSubmit={this.handleSubmit} />
        <PlannerGrid />
      </div>
    );
  }
}

export default App;
