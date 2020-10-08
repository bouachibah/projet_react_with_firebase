import React from 'react'

const News=(props)=> {

const Sayhello = () =>{
   return props.data.map((item,i)=>{
        return(
            <tr key={i}>

              <td>{item.title}</td>  
              <td>{item.body}</td>  
              <td><button className="btn btn-sm btn-danger">&times;</button></td>  
                
            </tr>
        )  
      });
}
    return (
        <div className="container">
        <table className="table table-dark">
       <thead className="thead-dark">
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Contenu</th>
          </tr>
        </thead>
        <tbody>
          
        {Sayhello()}
        
      </tbody>
   </table> 
   </div>
    )
}

export default News
