import React from 'react'
import About from './about'


const Edit=(props)=> {
    
    return (
        <div>    
           <About type="edit" id={props.match.params.id}/>
        </div>
    )
}

export default Edit;
