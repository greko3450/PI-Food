import React from "react";
import foot from "./Footer.module.css"
import {AiFillFacebook, AiFillLinkedin, AiFillGithub} from "react-icons/ai"

function Footer() {
  return(
    <div className={foot.footer}>
      <ul>
        <li><AiFillFacebook/></li>
        <li><AiFillLinkedin/></li>
        <li><AiFillGithub/></li>
      </ul>
    </div>
  )
}

export default Footer;
        
        
        
        