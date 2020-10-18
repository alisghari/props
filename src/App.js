import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js'
import image from './logo.svg'
import PropTypes from "prop-types";
function handleName(name) {
  alert(name)

}
function App() {
     return (
       <>
       <Profile fullname="John" bio="lorem ipsum" profession="lorem ipsum" handleName={handleName} >{image}</Profile>
    </>
     )
  
}



export default App;