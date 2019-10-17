import React, {Component} from 'react';
import { HeaderBlock } from './components';
class App extends Component {
  render() {
    return (
    <div className="app">
        <HeaderBlock
          firstName = "Jon"
          lastName = "Doe"
        />
    </div>
    );
  }
}

export default App;
