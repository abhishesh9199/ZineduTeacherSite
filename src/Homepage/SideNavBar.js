import React from "react";
import logo from "../img/Latest-Logo-ZinEdu-01 2.png";
import profileicon from "../img/profile-icon.png";
import myprofileicon from "../img/my-profile-icon.png";
import changepassword from "../img/change-password-icon.png";
import logout from "../img/log-out-icon.png";
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
  
const SideNavBar = () => {
    
    return (
<div>

{/* <!-- Laptop --> */}
<nav class="navbar nav-1 nav-bar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="p-3"><img src={logo} alt="Zinedu Logo" class="nav-logo"/></a>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown prof">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={profileicon} class="profile-icon"/>
                </a>
                <div class="dropdown-menu p-4 ddown" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item prof-dropdown text-center" href="myprofile.html">
                    <img src={myprofileicon} class="p-2"/>My Profile</a>
                    <br/>
                    <a class="dropdown-item prof-dropdown text-center">
                    <img src={changepassword} class="p-2"/>Change Password</a>
                    <br/>
                    <a class="dropdown-item prof-dropdown text-center" href="#">
                    <img src={logout} class="p-2"/>Log Out</a>
                </div>
              </li>
        </ul>
    </div>
</nav> 
<nav class="navbar navbar-expand-lg navbar-light bg-light nav-0">
    <a class="navbar-brand" href="#">
        <img src= {logo} class="nav-logo"/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={profileicon} alt="" class="profile-icon"/>
          </a>
          <div class="dropdown-menu p-4 ddown" aria-labelledby="navbarDropdown">
            <a class="dropdown-item prof-dropdown text-center" href="myprofile.html">
            <img src={myprofileicon} class="p-2"/>My Profile</a>
            <br/>
            <a class="dropdown-item prof-dropdown text-center" href="change_password.html">
            <img src={changepassword} class="p-2"/>Change Password</a>
            <br/>
            <a class="dropdown-item prof-dropdown text-center" href="#"><img src={logout} class="p-2"/>Log Out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>


       </div>
    )
}
export default SideNavBar;



