import React from "react"
import { Image } from "semantic-ui-react"
import cclogo from "../../images/cclogo.png"; // Tell webpack this JS file uses this image

const Logo = () => {
   return <Image src= {cclogo} size="small" wrapped/>
};

export default Logo;

