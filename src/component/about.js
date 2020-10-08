import React, { Component } from 'react'
import Search from './Search';
import {fireBase} from '../firebase';

class About extends Component{
    constructor(props){
        super(props);
    this.state = {
        titre :'',
        contenu:'',
        errMessage:'',
        successMessage:'',
   }
}
componentWillMount(){
    if(this.props.type ==='edit'){
        fireBase.ref(`monApp/${this.props.id}`).once('value')
        .then((snapshot)=>{
   this.setState({
       titre :snapshot.val().title,
       contenu :snapshot.val().contenu
   })
        })
    }
    
}

//mettre hors de la fonction de retour de retour
   onChangesName=(event)=>{
      
      this.setState({
         titre: event.target.value,
         errMessage:'',
         successMessage:''
        })
}
onChangesContenu=(event)=>{
   this.setState({
      contenu: event.target.value,
      errMessage:'',
      successMessage:''

     })
}
handleForm=(event)=>{
    event.preventDefault();
   switch (this.props.type) {
       case 'add':
        if(this.state.contenu && this.state.titre !=""){
            let monApp={
                title:this.state.titre,
                contenu:this.state.contenu,
          }
           fireBase.ref('monApp').push(monApp)
           .then(()=>{
               this.setState({
                   successMessage:<div className="success">message bien enregistré !</div>,
                   errMessage:'',
                   titre:'',
                   contenu:''
               })
           }).catch((e)=>{
               console.log(e);
           })
        }else{
            this.setState({
                errMessage:'ce champ doit obligatoirement etre rempli'
            })
        }
           break;
           case 'edit':
            if(this.state.contenu && this.state.titre !=""){
                let monApp={
                    title:this.state.titre,
                    contenu:this.state.contenu,
              }
              fireBase.ref(`monApp/${this.props.id}`).update(monApp)
               .then(()=>{
                   this.setState({
                       successMessage:<div className="success">message bien modifié!</div>,
                       errMessage:'',
                       titre:'',
                       contenu:''
                   })
               }).catch((e)=>{
                   console.log(e);
               })
            }else{
                this.setState({
                    errMessage:'ce champ doit obligatoirement etre rempli'
                })
            }      

               break;
       default:
           break;
   }
    
}


    render(){
        console.log(this.state.contenu); 
    return (
           <div>
               <Search/>
        <div className="container">
       
            <div className="row">
              <div className="col-md-6 auto">
              <span>{ this.state.successMessage}</span>
              <form onSubmit={this.handleForm}>
            <div className="form-group">
                <label htmlFor="first">Titre</label>
                <input  className="form-control" onChange={this.onChangesName} value={this.state.titre} 
                placeholder="Titre" />
              <span>{ this.state.errMessage}</span>
            </div>
            <div className="form-group">
                <label htmlFor="last">Contenu</label>
                <input  className="form-control" onChange={this.onChangesContenu}  value={this.state.contenu}  placeholder="contenu.." />
                <span>{ this.state.errMessage}</span>
            </div>
            {/* <div className="form-group">
            <select value={this.state.ville} 
               onChange={this.handler}
              className="form-control">  
                 <option value="choisir une ville" disabled >choisir une ville</option>
                 <option value="rabat">Rab</option>
                 <option value="tanger">tan</option>
                 <option value="marakech">marak</option>
            </select>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
              </div>
            </div>
            
        </div> </div>
    )
  }
    
    
}

export default About

/* ***
import React, { Component } from 'react'
import Search from './Search';
import {fireBase} from '../firebase';



class About extends Component{
    constructor(props){
        super(props);
    this.state = {
        titre :'',
        contenu:'',
        errMessage:'',
        successMessage:'',
   }
}
componentWillMount(){
    if(this.props.type ==='edit'){
        fireBase.ref(`monApp/${this.props.id}`).once('value')
        .then((snapshot)=>{
   this.setState({
       titre :snapshot.val().title,
       contenu :snapshot.val().contenu
   })
        })
    }
    
}

//mettre hors de la fonction de retour de retour
   onChangesName=(event)=>{
      
      this.setState({
         titre: event.target.value,
         errMessage:'',
         successMessage:''
        })
}
onChangesContenu=(event)=>{
   this.setState({
      contenu: event.target.value,
      errMessage:'',
      successMessage:''

     })
}
handleForm=(event)=>{
    event.preventDefault();
  switch(this.props.type){
     case 'add' :
        if(this.state.contenu && this.state.titre !==''){
            let monApp={
                title:this.state.titre,
                contenu:this.state.contenu
          }
           fireBase.ref('monApp').push(monApp)
           .then(()=>{
               this.setState({
                   successMessage:<div className="success">message bien enregistré !</div>,
                   errMessage:'',
                   titre:'',
                   contenu:''
               })
           }).catch((e)=>{
               console.log(e);
           })
        }else{
            this.setState({
                errMessage:'ce champ doit obligatoirement etre rempli'
            })
        }
        break;
        case 'edit':
            if(this.state.contenu && this.state.titre !==""){
                let monApp={
                    title:this.state.titre,
                    contenu:this.state.contenu,
              }
              fireBase.ref(`monApp/${this.props.id}`).update(monApp)
               .then(()=>{
                   this.setState({
                       successMessage:<div className="success">message bien enregistré !</div>,
                       errMessage:'',
                       titre:'',
                       contenu:''
                   })
               }).catch((e)=>{
                   console.log(e);
               })
            }else{
                this.setState({
                    errMessage:'ce champ doit obligatoirement etre rempli'
                })
            }
            break;
        default:
            console.log('erreur')
  }
    
}


    render(){
        console.log(this.state.contenu); 
    return (
           <div>
               <Search/>
        <div className="container">
            <div className="row">
              <div className="col-md-6 auto">
              <span>{ this.state.successMessage}</span>
              <form onSubmit={this.handleForm}>
            <div className="form-group">
                <label htmlFor="first">Titre</label>
                <input  className="form-control" onChange={this.onChangesName} value={this.state.titre} 
                placeholder="Titre" />
              <span>{ this.state.errMessage}</span>
            </div>
            <div className="form-group">
                <label htmlFor="last">Contenu</label>
                <input  className="form-control" onChange={this.onChangesContenu}  value={this.state.contenu}  placeholder="contenu.." />
                <span>{ this.state.errMessage}</span>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
              </div>
            </div>
            
        </div> </div>
    )
  }
    
    
}

export default About
*** */
