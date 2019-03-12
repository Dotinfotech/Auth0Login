import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Dashboard from './components/dashboard';
import NotFound from './components/notFound';
import CallBack from './components/callback';
class App extends Component {
  render() {
    let mainComponent = "";
    switch(this.props.location) {
      case "": 
          mainComponent = <Main />;
          break;
      case "callback": 
          mainComponent = <CallBack/>;
          break;
      case "dashboard": 
          mainComponent = this.props.auth.isAuthenticated() ? <Dashboard {...this.props} /> : <NotFound />;
          break;
      default: 
          mainComponent= <Main />;
    }
    return (
      <div className="App">
          <p>State Name {this.props.name}</p>
          <div>
            Dashboard Area<br/>
            <a href="/dashboard">Click Here</a>
          </div>
          {/* {mainComponent} */}
          <div>
            <hr/>
            Login First
            <hr/>
            <button onClick={this.props.auth.login}>Login</button>
          </div>
          <br/>
          <br/>
          <button onClick={this.props.auth.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
