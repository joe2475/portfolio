import React, { Fragment } from "react";
import {  AiOutlineGithub, AiFillLinkedin} from "react-icons/ai";
import './footer.styles.scss';


const Footer = () =>
{
    return(
<Fragment>
            <footer className="footer">
            <a href="https://github.com/joe2475/" target={"_blank"} className="logo"><AiOutlineGithub/></a>
            <a href="https://www.linkedin.com/in/joseph-barsis-362237149/" target={"_blank"} className="logo"><AiFillLinkedin/></a>
            </footer>
            </Fragment>
    )
    }


 export default Footer;