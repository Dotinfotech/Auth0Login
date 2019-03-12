import React , { Component } from 'react';
import Auth from '../auth';

export default class CallBack extends Component{

    componentDidMount(){
        const auth = new Auth();
        auth.handleAuthentication();
    }
    render(){
        return(
            <div>
                <p className="App-intro">
                    CallBack
                </p>
            </div>
        )
    }
}