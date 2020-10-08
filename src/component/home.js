
import Axios from 'axios';
import React, { Component } from 'react';

import News from './news';
import Search from './Search';



class Home extends Component{
    state={
        data:[],
        filtred:[]
    }
    componentWillMount(){
        Axios.get('http://jsonplaceholder.typicode.com/posts/?_start=0&_end=9')
        .then(response=>{
           this.setState({
               data:response.data
           })
        })
    }
    chercher=(event)=>{
        event.preventDefault();
        let mc=event.target.value;
        const filtred = this.state.data.filter((item)=>{
            return item.title.indexOf(mc.toLowerCase())>-1||item.body.indexOf(mc.toLowerCase())>-1
        });
        this.setState({
            filtred
        })
        console.log(filtred);
    }

   
    render(){
       
        return( 
           
            <div className="container">
            
                 
            <div><Search chercher={this.chercher}/></div> 
            <div> <News data={this.state.filtred.length>0?this.state.filtred:this.state.data} /></div>  
            </div>
        )
    }
}

export default Home
