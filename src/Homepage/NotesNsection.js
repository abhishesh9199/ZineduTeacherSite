import React from "react";
import upcomingC from "../img/upcoming-class.png";
import pastC from "../img/past-class.png";
import doubt from "../img/doubts.png";
import notes from "../img/notes.png";
import MySchedulePastClass from "../MySchedulePastClass";
import MyScheduleUpComingClasses from "../MyScheduleUpComingClasses";
import Doubts from "../Doubts";
import Notes from "../Notes";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const NotesNsection = () => {
    return (
<div class="btn-container text-center p-5">
    <div class="row">
    {/* <Link to='/MyScheduleUpComingClasses'> */}

        <div class="col-lg-3 col-md-6 col-sm-6">
        <a href="past-classes.html">

                <img src={upcomingC}/>
                <br/>
                Upcoming Classes
                </a>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="past-classes.html">
                <img src={pastC} />
                <br/>
                Past Classes
            </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="doubts.html">
                <img src={doubt} alt=""/>
                <br/>
                Doubts
            </a>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
            <a href="notes.html">
                <img src={notes} alt=""/>
                <br/>
                Notes
            </a>
        </div>
    </div>
    
</div>

    )
}
export default NotesNsection;