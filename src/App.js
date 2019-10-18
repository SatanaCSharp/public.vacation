import React, {Component} from 'react';
import { HeaderBlock } from './components';
import { SignIn }    from './pages'
import { FooterBlock } from './components';
class App extends Component {
  render() {
    return (
    <div className="app">
        <HeaderBlock
          firstName = "Jon"
          lastName = "Doe"
        />
        <SignIn/>
        <FooterBlock/>
    </div>
    );
  }
}

export default App;
