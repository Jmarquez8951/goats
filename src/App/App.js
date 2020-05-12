import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }
  // outside render - anything that modifies state

  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
    this.setState({ goats });
  }

  render() {
    // inside render - anything we need to do to modify the UI
    return (
      <div className="App">
        <h1>GOAT YOGA LTD</h1>
        <GoatCoral goats={this.state.goats}/>
      </div>
    );
  }
}

export default App;
