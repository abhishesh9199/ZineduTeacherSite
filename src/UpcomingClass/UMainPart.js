import React from "react";
import uicon from "../img/uclass-icon.png";
import picon from "../img/pclass-icon.png";
import dicon from "../img/doubts-icon.png";
import nicon from "../img/notes-icon.png";
import licon from "../img/logout-icon.png";
const UMainPart=()=>{
    return(
        <div>
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

            <div class="col-lg-9">
                <div class="row">
                    <div class="class-schedule col-lg-5 p-3 text-center">
                        <a href="myschedule_upcomingclass.html" class="uclass text-center">
                        <div class="row">
                            <div class=" date col-lg-6 p-1 text-center">
                                Date
                            </div>
                            <div class="col-lg-6 p-1 text-center">
                                Time
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col-12 p-1 text-center">
                                Chapter
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col-12 p-1 text-center">
                                Chapter Name
                            </div>
                        </div>
                        </a>
                    </div>

                    <div class="class-schedule col-lg-5 p-3 text-center">
                        <a href="myschedule_upcomingclass.html"  class="uclass">
                        <div class="row">
                            <div class="date col-lg-6 p-1">
                                Date
                            </div>
                            <div class="col-lg-6 p-1">
                                Time
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-1">
                                Chapter
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-1">
                                Chapter Name
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
                

                <div class="row">
                    <div class="class-schedule col-lg-5 text-center p-3">
                        <a href="myschedule_upcomingclass.html"  class="uclass">
                        <div class="row">
                            <div class=" date col-lg-6 p-1">
                                Date
                            </div>
                            <div class="col-lg-6 p-1">
                                Time
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-1">
                                Chapter
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-1">
                                Chapter Name
                            </div>
                        </div>
                        </a>
                    </div>

                    <div class="class-schedule col-lg-5 text-center p-3">
                        <a href="myschedule_upcomingclass.html"  class="uclass">
                        <div class="row">
                            <div class="date col-lg-6 p-1">
                                Date
                            </div>
                            <div class="col-lg-6 p-1">
                                Time
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-1">
                                Chapter
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-1">
                                Chapter Name
                            </div>
                        </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}
export default UMainPart;