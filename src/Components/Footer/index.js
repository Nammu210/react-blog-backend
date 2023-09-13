import React from "react";

import FooterLogo from "../FooterLogo";
import './Footer.style.css'

const Footer = () => {
  return (
    <div className="Mfooter">
      <div className="theFWidth">

<div className="Fcont">

      <div className="FSc">
      <div className="footerLogo">
        <div className="theFProp"><FooterLogo /></div>
      </div>
      <div className="mCon">
        <div className="fmsc">
          <div className="FCw">
            <span>©</span>2023.The Siren. All Rights reserved
          </div>
        </div>
      </div>
      </div>
     
      <div className="Fcontact">
        <h3>Contact</h3>
        <div>
          <span className="LocEmoji"> Address</span> 12/24 ,shanti nagar, Mahrashtra.
        </div>
        <div>
          <span className="PhoneEmoji">Mobile.no</span> +91 7900135722
        </div>
        <div className="lastFText">
          <pre><span className="MailEmoji">Email.com</span>  support@thesiren.com</pre>
        </div>
      </div>

      <div className="refernce">
        <h3 className="TheFReferences">References</h3>
        <div className="TheFBollywood"><a className="Flinks">Bollywood</a></div>
        <div className="TheFHollywood"><a className="Flinks" >Hollywood</a></div>
        <div className="TheFTechnology"><a className="Flinks" >Technology</a></div>
        <div className="TheFFitness"><a className="Flinks">Fitness</a></div>
        <div className="TheFFood"><a className="Flinks" >Food</a></div>
      </div>
      </div>
</div>
    </div>
  );
};

export default Footer;
