import React,  { useState } from "react";
import { useAlert } from 'react-alert'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../actions'
const Header = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
 
  const alert = useAlert()
  const counter = useSelector (state => state.counter );
  const isLogged = useSelector (state => state.isLogged);
  const dispatch = useDispatch ();
  return (
    <header className="App-header">
       <nav className="navbar navbar-expand-lg navbar-light bg-light" className="nav">
  <a className="navbar-brand" href="/#"><h2  className="Nav-title">GOFLIX</h2></a>
  <div className="searchs">
  <input
  className="form-control mr-sm-2"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        className="search"
        placeholder="Search for a movie, a serie..." 
      />
      <input onClick={callSearchFunction} className="srch" type="submit" value="SEARCH" /></div>
      <div  className="nm-content-header-text"><p className="txt">UNLIMITED TV SHOWS &amp; MOVIES</p></div>
     
      <button className="alert"
      className="btn btn-get-started btn-red btn-large"
      type="submit" value="SEARCH"
      onClick={() => {
        alert.show("Still don't work !")
        
      }}
    >
      <p className="alertxt"> Sign in</p>
    </button>
    
    </nav>
    </header>
    

  );
};

export default Header;
