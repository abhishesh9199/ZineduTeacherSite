import React from "react";

const PastClasses = () => {
    return (
        <div>
        {/* <!-- Nav Bar -->
    <!-- Laptop --> */}
    <nav>
        <div class="p-3 nav-bar nav-1">
            <a href="teacher.html"><img src="./img/Latest-Logo-ZinEdu-01 2.png" alt="Zinedu Logo" class="nav-logo"/></a>
        </div>
    </nav>

    {/* <!-- Mobile View --> */}
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-0">
        <a class="navbar-brand" href="teacher.html">
            <img src="./img/Latest-Logo-ZinEdu-01 2.png" alt="Zinedu Logo" class="nav-logo p-2"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="uclass.html">
                <img src="./img/uclass-icon.png" alt="" class="p-3"/>Upcoming Class
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="past-classes.html">
                <img src="./img/pclass-icon.png" alt="" class="p-3"/>Past Classes
              </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="doubts.html">
                    <img src="./img/doubts-icon.png" alt="" class="p-3"/>Doubts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="notes.html">
                    <img src="./img/notes-icon.png" alt="" class="p-3"/>Notes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">
                    <img src="./img/logout-icon.png" alt="" class="p-3"/>Logout
                </a>
              </li>
          </ul>
        </div>
      </nav>

    {/* <!-- Main Content --> */}
        <div class="row">

            {/* <!-- Side Nav --> */}
            <div class="side-nav col-lg-3 nav-1">
                <div class="upcoming-classes">
                    <a href="uclass.html"><img src="./img/uclass-icon.png" alt="" class="p-3"/>Upcoming Classes</a>
                </div>

                <div class="past-classes sidebar-active">
                    <a href="past-classes.html"><img src="./img/pclass-icon.png" alt="" class="p-3"/>Past Classes</a>
                </div>

                <div class="doubts">
                    <a href="doubts.html"><img src="./img/doubts-icon.png" alt="" class="p-3"/>Doubts</a>
                </div>

                <div class="notes">
                    <a href="notes.html"><img src="./img/notes-icon.png" alt="" class="p-3"/>Notes</a>
                </div>

                <div class="logout">
                    <a href="#"><img src="./img/logout-icon.png" alt="" class="p-3"/>Log Out</a>
                </div>

            </div>

            <div class="col-lg-9">
                <div class="row">
                    <div class="class-schedule col-lg-5 p-3 text-center">
                        <a href="myschedule_pastclasses.html" class="pclass">
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

                    <div class="class-schedule col-lg-5 p-3 text-center">
                        <a href="myschedule_pastclasses.html"  class="pclass">
                        <div>
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
                        </div>
                        </a>
                    </div>
                </div>
                

                <div class="row">
                    <div class="class-schedule col-lg-5 text-center p-3">
                        <a href="myschedule_pastclasses.html"  class="pclass">
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
                        <a href="myschedule_pastclasses.html"  class="pclass">
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

    <footer>
        <div class="text-center">
            <img src="./img/footer-logo.png" alt="footer logo" class="ft-logo-img"/>
        </div>

        <div class="content">
            <div class="row p-3">
                <div class="col-md-3 footer-heading p-0 address">
                    <img src="img/zinedu-logo.png" alt=""/>
                    <br/>
                    <br/>
                    <p class="text-justify">
                        Zinedu Classes Pvt Ltd. 8th Floor, <br/>
                        Riana Towers, Plot No. A- 93-94 <br/>
                        Sector-136, Noida- 201305 (UP)<br/>
                        <br/>
                        <a href="tel:+91-9821400500" class="tel">+91-9821400500</a> <br/>
                        <br/>
                        <a href="mailto:support@zineduclasses.com" class="mail">support@zineduclasses.com</a>
                    </p>
                </div>
                <div class="col-md-3 p-4">
                    <p class="text-justify footer-heading">
                        INFORMATION <br/>
                    </p>
                    <ul class="footer-data list-inline">
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help Centre- FAQs</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div class="col-md-3 p-4">
                    <p class="text-justify footer-heading">
                        QUICK LINKS<br/>
                    </p>
                    <ul class="footer-data list-inline">
                        <li><a href="#">Live Classes</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Free Study Materials</a></li>
                    </ul>
                </div>
                <div class="col-md-3 socials p-4">
                    <p class="text-justify footer-heading">
                        FOLLOW US<br/>
                        <ul class="list-inline social-icons">
                            <li><a href="#"><i class="fab fa-facebook p-2"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin p-2"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram p-2"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter p-2"></i></a></li>
                        </ul>
                    </p>
                    <p class="text-justify footer-heading">
                        CHAT WITH US
                        <ul class="list-inline social-icons p-2">
                            <li><a href="#"><i class="fab fa-whatsapp p-2"></i></a></li>
                            <li><a href="#"><i class="fab fa-telegram-plane p-2"></i></a></li>
                        </ul>
                    </p>
                </div>
            </div>
            
            <div class=" copyright text-center p-3">
                <hr class="footer-line"/>
                COPYRIGHT &#169; 2020 ZINEDU
            </div>
        </div>
    </footer>
        </div>
        )
}
export default PastClasses;