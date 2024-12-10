import React, { useContext } from "react";
import logo from "../images/DH.png";
import iconoFacebook from "../images/ico-facebook.png";
import iconoInstagram from "../images/ico-instagram.png";
import iconoWhatsapp from "../images/ico-whatsapp.png";
import iconoTiktok from "../images/ico-tiktok.png";
import { ContextGlobal } from "../Components/utils/global.context";

const Footer = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <footer className={state.theme}>
      <p>Powered by</p>
      <img src={logo} alt='DH-logo'/>
      <div>
        <img src={iconoFacebook} alt="facebook" className="icons" />
        <img src={iconoInstagram} alt="instagram" className="icons" />
        <img src={iconoWhatsapp} alt="whatsapp" className="icons" />
        <img src={iconoTiktok} alt="tiktok" className="icons" />
      </div>
    </footer>
  )
}

export default Footer
