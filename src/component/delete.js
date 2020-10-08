import React from 'react';
import {fireBase} from '../firebase';
const Delete=(props)=>{
    const supprimer=()=>{
        fireBase.ref(`monApp/${props.match.params.id}`).remove()
               .then(()=>{
                   props.history.push('/');
               }).catch((e)=>{
                   console.log(e);
               })
    }
    return (
        <div>
           {supprimer()}  
        </div>
    )
}
export default Delete;
