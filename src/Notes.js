import React from "react";
import "./Notes.css";
import logo from "./img/Latest-Logo-ZinEdu-01 2.png";
import Footer from "./Homepage/Footer";
import uicon from "./img/uclass-icon.png";
import picon from "./img/pclass-icon.png";
import dicon from "./img/doubts-icon.png";
import nicon from "./img/notes-icon.png";
import licon from "./img/logout-icon.png";


const Notes = () => {
    return (
    <div>
    {/* <!-- Nav Bar -->
    <!-- Laptop --> */}
    <nav>
        <div class="p-3 nav-bar nav-1">
            <a href="teacher.html"><img src={logo} alt="Zinedu Logo" class="nav-logo"/></a>
        </div>
    </nav>

    {/* <!-- Mobile View --> */}
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-0">
        <a class="navbar-brand" href="teacher.html">
            <img src={logo} alt="Zinedu Logo" class="nav-logo p-2"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="uclass.html">
                <img src={uicon} alt="" class="p-3"/>Upcoming Class
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="past-classes.html">
                <img src={picon} alt="" class="p-3"/>Past Classes
              </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="doubts.html">
                    <img src={dicon} alt="" class="p-3"/>Doubts
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="notes.html">
                    <img src={nicon} alt="" class="p-3"/>Notes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                    <img src={licon} alt="" class="p-3"/>Logout
                </a>
              </li>
          </ul>
        </div>
      </nav>

    {/* <!-- Main Content --> */}
    <div class="row">
        <div class="side-nav col-lg-3 nav-1">
            <div class="upcoming-classes">
                <a href="uclass.html"><img src={uicon} alt="" class="p-3"/>Upcoming Classes</a>
            </div>

            <div class="past-classes">
                <a href="past-classes.html"><img src={picon} alt="" class="p-3"/>Past Classes</a>
            </div>

            <div class="doubts">
                <a href="doubts.html"><img src={dicon} alt="" class="p-3"/>Doubts</a>
            </div>

            <div class="notes sidebar-active">
                <a href="notes.html"><img src={nicon} alt="" class="p-3"/>Notes</a>
            </div>

            <div class="logout">
                <a href="#"><img src={licon} alt="" class="p-3"/>Log Out</a>
            </div>

        </div>

        <div class="col-lg-9">                
        </div>
    </div>
    <Footer/>
        </div>
    )
}
export default Notes;