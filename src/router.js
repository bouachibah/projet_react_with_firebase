import React,{Component} from 'react'
import{Route,Switch} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Edit from './component/edit';
import Delete from './component/delete';
import  showsApp from './component/showsApp';

class Routes extends Component{
    render(){
        return (
            <Switch>
                  <Route path="/" exact component ={Home}/>
                  <Route path="/about" exact component ={About}/>
                  <Route path="/edit/:id" exact component ={Edit}/>
                  <Route path="/delete/:id" exact component ={Delete}/>
                  <Route path="/all" exact component ={showsApp}/>
                 
            </Switch>
            )
    }
}

export default Routes
