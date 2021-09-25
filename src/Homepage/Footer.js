import React from "react";
import footer from "../img/footer-logo.png";
import zinedu from "../img/zinedu-logo.png";

const Footer = () =>{
    return (
    <div>
        <div class="text-center">
        <img src={footer} alt="footer logo" class="ft-logo-img"/>
    </div>

    <div class="content">
        <div class="row p-3">
            <div class="col-md-3 footer-heading p-0 address">
                <img src={zinedu} alt=""/>
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
                {/* <Switch>
                 <Route exact path="/" component={Home} />
                 <Route path="/" component={Login} />
                 <Route path="/" component={Explore} />
                </Switch>)*/
                    <li><a href="#">Policy</a></li> }
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
            COPYRIGHT &#169; {new Date().getFullYear()} ZINEDU
        </div>
    </div>
    </div>
    )
}
export default Footer;