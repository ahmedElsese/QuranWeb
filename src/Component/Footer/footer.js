import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaAngleDoubleUp } from "react-icons/fa";


function Footer() {


    window.onscroll = function () {
        var myDiv = document.getElementById("doneNav");
        var B = document.body; //IE 'quirks'
        var D = document.documentElement; //IE with doctype
        D = (D.clientHeight) ? D : B;

        if (D.scrollTop >= 700) {
            myDiv.classList.add("show");
        } else {
            myDiv.classList.remove("show");
        }
    };


    return (
        <div id="fotter" className="footer-page">
            <div className="box">
                <ul className="box-ul">
                    <li> <BsFacebook className="box-li" /> </li>
                    <li> <BsInstagram className="box-li" /> </li>
                    <li> <BsLinkedin className="box-li" /> </li>
                    <li> <BsTwitter className="box-li" /> </li>
                </ul>
            </div>

            <div
                onClick={() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    document.body.style.scrollBehavior = "smooth"
                }}
                id="doneNav" className="up-top" >
                <FaAngleDoubleUp className="box-ic" />
            </div>
        </div >
    );
};



export default Footer;