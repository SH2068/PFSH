import React from "react";
import "../Contact/Contact.css";
import GsapMagnetic from "../../Component/GsapMagnetic/GsapMagnetic";
import call_icon from "../../Images/phone-call.svg";
import mail_icon from "../../Images/mail.svg";
import { social_icons, social_icons_2 } from "../Utils/Mock/MockData";

const Contact = () => {
  return (
    <div className="container-fluid contact_projects">
      <h1>CONTACT</h1>
      <div className="conatct_container">
        <div className="box_1 col-lg-7">
          <div className="icon_box1">
            <div className="title">
              <p></p>
              <span>CONNECT</span>
            </div>
            <div className="icons">
              {social_icons.map((item, index) => (
                <GsapMagnetic key={index}>
                  <a href={item.link}>
                    <img
                      className="magnetic-btn"
                      src={item.social_Image}
                      alt="icon"
                    />
                  </a>
                </GsapMagnetic>
              ))}
            </div>
          </div>
          <div className="icon_box2">
            <div className="title">
              <p></p>
              <span>SH</span>
            </div>
            <div className="icons">
              {social_icons_2.map((item, index) => (
                <GsapMagnetic key={index}>
                  <a href={item.link}>
                    <img
                      className="magnetic-btn"
                      src={item.social_Image}
                      alt="icon"
                    />
                  </a>
                </GsapMagnetic>
              ))}
            </div>
          </div>
        </div>
        <div className="box_2 col-lg-5">
          <div className="opentowork">
            <span className="dot">
              <p className="blink1"></p>
              <p className="blink3"></p>
            </span>

            <p>Email & Number</p>
          </div>
          <h2>
            <img className="mail_icon" src={mail_icon} alt="mail_icon" />{" "}
            seohyun2081@gmail.com
          </h2>
          <h1>
            <img className="call_icon" src={call_icon} alt="call_icon" /> +92
            010 2720 2068
          </h1>
        </div>
      </div>
      <h5>COPYRIGHT © CODEWITHMR, 2024 SH </h5>
    </div>
  );
};

export default Contact;
