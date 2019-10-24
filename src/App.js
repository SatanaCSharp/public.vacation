import React, {Component} from 'react';
import { HeaderBlock, FooterBlock, SignUp, SignIn, Cabinet, EditVacation, CreateVacation, EditUser } from './components';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
class App extends Component {
  render() {
    return (
    <div className="app">
        <Router>
            <HeaderBlock
                firstName= "Jon"
                lastName= "Doe"
            />
            <div>
                <Switch>
                    <Route path="/sign_in"  component={SignIn}/>
                    <Route path="/sign_up" component={SignUp}/>
                    <Route path="/cabinet" component={Cabinet}/>
                    <Route path="/user/edit/:id" component={EditUser}/>
                    <Route path="/vacation/edit/:id" component={EditVacation}/>
                    <Route path="/vacation/create" component={CreateVacation}/>
                    <Route path="/"><Redirect to="/sign_in"/></Route>
                </Switch>
            </div>
        </Router>
        <FooterBlock/>
    </div>
    );
  }
}

export default App;
