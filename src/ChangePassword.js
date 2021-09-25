import React from "react";
import "./ChangePassword.css";
import changeP from "./img/change_password.png";
import logo from "./img/Latest-Logo-ZinEdu-01 2.png";
const ChangePassword = () =>{
    return (
        <div class="data">
        <div class="row">
            <div class="profile col-lg-5 col-sm-12 col-xs-12 text-center p-3">
                <div class="box-style container">
                    <img src={changeP} alt="" class="change-password p-5"/>
                </div>
            </div>
            <div class="passwrord-form col-lg-7 col-sm-12 col-xs-12 text-center p-5">
                <img src={logo} alt="" class="form-logo p-3"/>
                <br/>
                <p class="p-4">
                    <strong>Change Password</strong>
                </p>
                <p>
                    Your new password must be different <br/> from previous used passwords.
                </p>
                <form class="">
                    <div class="form-group1 p-4">
                      <div class="row">
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <input type="password" name="password" autocomplete="current-password" id="id_password" class="input-area form-control" placeholder="      Old Password"/>
                            {/* <input type="password" name="password" autocomplete="current-password" id="id_password" class="input-area form-control icon" placeholder="      Old Password"/> */}
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                            <i class="form-check-inline far fa-eye toggle-eye" id="togglePassword"></i>
                        </div>
                      </div>
                    </div>
                    <div class="form-group p-4">
                        <div class="row">
                          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                              <input type="password" name="password1" autocomplete="current-password" id="id_password1" class="input-area form-control" placeholder="      New Password"/>
                          </div>
                          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                              <i class="form-check-inline far fa-eye toggle-eye" id="togglePassword1"></i>
                          </div>
                        </div>
                    </div>
                    <div class="form-group p-4">
                        <div class="row">
                          <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                              <input type="password" name="password2" autocomplete="current-password" id="id_password2" class="input-area form-control" placeholder="      Re-Type Password"/>
                          </div>
                          <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
                              <i class="form-check-inline far fa-eye toggle-eye" id="togglePassword2"></i>
                          </div>
                        </div>
                    </div>
                    <div class="form-group p-3">
                        <button type="submit" class="btn change-psswrd-btn">Change Password</button>
                    </div>
                  </form>

            </div>
        </div>
    </div>


    )
}
export default ChangePassword;