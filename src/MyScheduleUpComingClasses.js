import React from "react";
import logo from "./img/Latest-Logo-ZinEdu-01 2.png";
import Footer from "./Homepage/Footer";
import uicon from "./img/uclass-icon.png";
import picon from "./img/pclass-icon.png";
import dicon from "./img/doubts-icon.png";
import nicon from "./img/notes-icon.png";
import licon from "./img/logout-icon.png";
import addNote from "./img/add-notes.png";
import eNote from "./img/edit-notes.png";
import tag from "./img/tags.png";
import lrecording from "./img/live.png";
import "./MySchedulePastClass.css";
const MyScheduleUpComingClasses = () => {
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
                <li class="nav-item active">
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
                  <li class="nav-item">
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
                <div class="upcoming-classes sidebar-active">
                    <a href="uclass.html"><img src={uicon} alt="" class="p-3"/>Upcoming Classes</a>
                </div>
    
                <div class="past-classes">
                    <a href="past-classes.html"><img src={picon} alt="" class="p-3"/>Past Classes</a>
                </div>
    
                <div class="doubts">
                    <a href="doubts.html"><img src={dicon} alt="" class="p-3"/>Doubts</a>
                </div>
    
                <div class="notes">
                    <a href="notes.html"><img src={nicon} alt="" class="p-3"/>Notes</a>
                </div>
    
                <div class="logout">
                    <a href="#"><img src={licon} alt="" class="p-3"/>Log Out</a>
                </div>
    
            </div>
    
            <div class="col-lg-5 p-4">
                <form>
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Chapter</label>
                        </div>
                        <div class="col-sm-10">
                          <label class="col-sm-10 col-form-label chapter-name" id="">Polynomials and Functions</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Subject</label>
                        </div>
                        <div class="col-sm-10">
                          <label class="col-sm-10 col-form-label subject-name" id="">Maths X</label>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Date</label>
                        </div>
                        <div class="col-sm-10">
                          <label class="col-sm-10 col-form-label date" id="">15 Sept, 2021</label>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Time</label>
                        </div>
                        <div class="col-sm-10">
                          <label class="col-sm-10 col-form-label time" id="">11:50 AM</label>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Studio</label>
                        </div>
                        <div class="col-sm-10">
                          <label class="col-sm-10 col-form-label studio" id="">7</label>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Tags</label>
                        </div>
                        <div class="col-sm-12">
                            <ul class="list-group">
                                <li class="list-group-item tag-0">Polynomials and Functions</li>
                                <li class="list-group-item tag-1">Height and Distance</li>
                                <li class="list-group-item tag-0">Polynomials and Functions</li>
                                <li class="list-group-item tag-1">Height and Distance</li>
                                <li class="list-group-item tag-0">Polynomials and Functions</li>
                                <li class="list-group-item tag-1">Height and Distance</li>
                              </ul>
                        </div>
                    </div>
    
                    <br/>
                    <div class="row">
                        <div class="col-sm-2">
                            <label for="" class="col-sm-2 col-form-label flabel">Batches</label>
                        </div>
                        <div class="col-sm-12">
                            <ul class="list-group">
                                <li class="list-group-item batch-0">Batch Sep Oct 2021</li>
                                <li class="list-group-item batch-1">Batch Sep Dec 2021</li>
                                <li class="list-group-item batch-0">Batch Sep Oct 2021</li>
                                <li class="list-group-item batch-1">Batch Sep Dec 2021</li>
                                <li class="list-group-item batch-0">Batch Sep Oct 2021</li>
                                <li class="list-group-item batch-1">Batch Sep Dec 2021</li>
                              </ul>
                        </div>
                    </div>
                </form>
            </div>
    
            <div class="col-lg-4 text-center p-4">
                <div class="row">
                    <div class="col-sm-6">
                        <a class="icon btn btn-primary p-3" href="#" role="button">
                            <img src={addNote} alt="" class=""/>
                            <p class="p-1">Add Notes</p>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a class="icon btn btn-primary p-3" href="#" role="button">
                            <img src={eNote} alt=""/>
                            <p class="p-1">Edit Chapter</p>
                        </a>
                    </div>
                </div>
    
                <div class="row">
                    <div class="col-sm-6">
                        <a class="icon btn btn-primary p-3" href="#" role="button">
                            <img src={tag} alt="" class=""/>
                            <p class="p-1">Tags</p>
                        </a>
                    </div>
                    <div class="col-sm-6">
                        <a class="icon btn btn-primary p-3" href="#" role="button">
                            <img src={lrecording} alt=""/>
                            <p class="p-1">Live Class Recording</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
        <Footer/>
        </div>
    )
}
export default MyScheduleUpComingClasses;