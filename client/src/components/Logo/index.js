import React from "react"
import { Image } from "semantic-ui-react"
import cclogo from "../../img/cclogo.png"; // Tell webpack this JS file uses this image

const AppLogo = () => {
   return <Image src= {cclogo} size="small" wrapped/>
};

// console.log(cclogo); // /logo.84287d09.png

export default AppLogo