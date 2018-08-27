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

  handleInputChanges = event => {
    this.setState({
      item: event.target.value
    })

    // Test input changes on Item
    console.log(this.state.item);
  }

  render() {
    let username = this.state.username;
    
    return (
      <div className="app-container">
        <Header username={username} />
        <AddItem 
          handleInputChanges={this.handleInputChanges} />
        <PlannerGrid />
      </div>
    );
  }
}

export default App;
