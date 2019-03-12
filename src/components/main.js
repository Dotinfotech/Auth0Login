import React , { Component } from 'react';

export default class Main extends Component{
    render(){
        return(
        <div>
            <p className="App-intro">
                Main {this.props.name}
            </p>
            {!this.props.auth.isAuthenticated() && 
            <div>
                <hr/>
                Login First
                <hr/>
                {/* <button onClick={this.props.auth.login}>Login</button> */}
            </div>}
        </div>
        )
    }
}