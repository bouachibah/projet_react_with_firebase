import React from 'react';
import {Link} from 'react-router-dom'

const Search =(props)=> {
        return (



<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">Spring boot</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/all">data</Link>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <input  onChange={props.chercher} className="form-control mr-sm-2" type="search" autoComplete="off" placeholder="Search" aria-label="Search" />
    </div>
  </div>
</nav> 



 
        )
        }
export default Search;
