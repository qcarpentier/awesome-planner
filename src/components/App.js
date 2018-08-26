import React, { Component } from 'react';

import Header from './Header';
import AddItem from './AddItem';
import PlannerGrid from './PlannerGrid';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      today: [],
      tomorrow: [],
      dayAfterTomorrow: [],
      username: 'Jon Snow'
    }
  }
  
  render() {
    let username = this.state.username;
    
    return (
      <div className="app-container">
        <Header username={username} />
        <AddItem />
        <PlannerGrid />
      </div>
    );
  }
}

export default App;
