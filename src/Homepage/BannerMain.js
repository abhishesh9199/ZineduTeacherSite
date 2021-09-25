import React from "react";
import logo from "../img/Latest-Logo-ZinEdu-02 2.svg";
import techerlogo from "../img/Teacher_illustrations 2.png";
const BannerMain = () => {
    return(
        <div class="banner-main">
    <div class="row first_row0">
        <div class="col-lg-6 text-center p-2">
            <img src={logo} alt="Zinedu Logo" class="banner-logo p-3"/>
            <br/>
            <h2 class="teacher-name text-center align-middle p-3">Mr. Sudhanshu Shekhar</h2>
        </div>

        <div class="col-lg-6 text-center p-2">
            <img src= {techerlogo} class="teacher-illustration"/>
        </div>
    </div>
    <div class="row first_row1">
        <div class="col-lg-6 text-center p-2">
            <img src={techerlogo} alt="" class="teacher-illustration"/>
        </div>
        <div class="col-lg-6 text-center p-2">
            <img src={logo} alt="Zinedu Logo" class="banner-logo p-3"/>
            <br/>
            <h2 class="teacher-name text-center align-middle p-3">Mr. Sudhanshu Shekhar</h2>
        </div>
    </div>
</div>

    )
}
export default BannerMain;