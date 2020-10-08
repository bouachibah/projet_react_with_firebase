
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './firebase';

import Routes from './router';
import { BrowserRouter } from 'react-router-dom'

class App extends Component{
    
    render(){
       
        return(  
            <div className="container">
                <BrowserRouter>
                <Routes/>
                </BrowserRouter>      
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root')
)
