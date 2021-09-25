import React from "react";
import { Link } from "react-router-dom";
import teacherVector from "../img/teacher-vector.svg";

const Classes =() => {
    return (
    <div class="class-details p-5">
    <div class="row">
        <div class="col-lg-3 text-center p-5 classroom">
            <img src={teacherVector} alt="classroom"/>
        </div>
        
        <div class="col-lg-9 text-center margin-auto p-2 details">
            <div class="row details-data">
                <div class="col p-4">
                    UPCOMING CLASS
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 p-2">
                    CHEMISTRY XI
                </div>

                <div class="col-lg-6 col-md-6 p-2">
                    06 AUGUST,2021
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 p-2">
                    SECTION NAME
                </div>
                
                <div class="col-lg-6 col-md-6 p-2">
                    SCHOOL NAME
                </div>
            </div>

        </div>
    </div>
</div>
    )
}

export default Classes;