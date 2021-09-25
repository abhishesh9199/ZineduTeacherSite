import React from "react";
import logo from "./img/Latest-Logo-ZinEdu-01 2.png";
import plogo from "./img/myprofile.png";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const MyProfile = () => {
  return (
    <div class="data">
      <div class="row">
        <div class="profile col-lg-5 col-12 text-center p-3">
          <div class="box-style container">
            <img src={plogo} alt="" class="profile-pic p-5" />
          </div>
        </div>
        <div class="profile-form col-lg-7 col-12 text-center p-5">
          <img src={logo} alt="" class="form-logo p-3" />
          <br />
          <p class="p-4">
            <strong>My Profile</strong>
          </p>
          <p class="teacher-name">Mr. Sudhanshu Shekhar</p>
          <form>
            <div class="form-group p-3">
                <PersonOutlineIcon />
                <input
                  type="text"
                  class="input-area form-control"
                  id="exampleInputText1"
                  placeholder=" Username"
                />
              </div>
            <div class="form-group p-3">
              <input
                type="email"
                class="input-area form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="&#xF0E0;   Email Id"
              />
            </div>
            <div class="form-group p-3">
              <input
                type="text"
                class="input-area form-control"
                id="exampleInput"
                placeholder="&#xf2b9;   Mobile Number"
              />
            </div>
            <div class="form-group p-3">
              <button type="submit" class="btn save-changes">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
