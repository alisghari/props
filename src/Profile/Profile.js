import React from 'react'
import PropTypes from "prop-types";
import './App.css';

const Profile = (props) => {
return(
  <>
  {props.handleName(props.fullname)}
  <h1>FullName:{props.fullname}</h1>
  <h1>Bio:{props.bio}</h1>
  <h1>profession:{props.profession}</h1>
  <img src={props.children}/>
  </>
)

}
Profile.propTypes={
  fullname: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;