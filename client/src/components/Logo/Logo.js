import React from "react"
import { Image } from "semantic-ui-react"
import cclogo from "../../images/cclogo.png"; // Tell webpack this JS file uses this image

const Logo = () => {
   return <Image src= {cclogo} size="small" wrapped/>
};

// console.log(cclogo); // /logo.84287d09.png

export default Logo;

