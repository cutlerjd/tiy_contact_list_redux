import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import '../styles/App.css';

import ContactList from './ContactList'
import ContactDetail from './ContactDetail'

import {loadUsers} from '../actions/contactActions'

class App extends Component {
  componentWillMount(){
    loadUsers()
  }
  render() {
    return (
      <MuiThemeProvider>
      <Provider store={store}>
      <div className="container">
        <Router>
        <Switch>
          <Route exact path="/" component={ContactList}/>
          <Route path="/contact/:id" component={ContactDetail}/>
        </Switch>
        </Router>
        </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
