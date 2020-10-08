import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {fireBase} from '../firebase';
import Search from './Search';
class showsApp extends Component{
    constructor(props){
        super(props);
        this.state={
            monApp:[],
            successMessage:''
        }
    }
    componentWillMount(){
    fireBase.ref('monApp').once('value')
    .then((snapshot)=>{
    const data=[];
    snapshot.forEach((childsnapshot)=>{
        data.push({
            id:childsnapshot.key,
            ...childsnapshot.val()
        })
    })
    this.setState({
         monApp:data
    })
    })
}
render(){
 const Sayhello = () =>{
    return this.state.monApp.map((item,i)=>{
         return(
             <tr key={i}>
 
               <td>{item.title}</td>  
               <td>{item.contenu}</td>  
              <td>
               <Link to={`/edit/${item.id}`} className="btn btn-sm btn-danger"><span className="glyphicon">&#x270f;</span></Link>
               <Link to={`/delete/${item.id}`} className="btn btn-sm btn-danger"> <span className="glyphicon">&#xe020;</span></Link>
               </td>  
                 
             </tr>
         )  
       });
 }
     return (
     
         <div className="container">
             <Search/>
            <table className="table table-dark">
                <thead className="thead-dark">
                   <tr>
                      <th scope="col">Titre</th>
                      <th scope="col">Contenu</th>
                      <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {Sayhello()}
                </tbody>
            </table> 
        </div>
    
     )
 }}
export default showsApp
