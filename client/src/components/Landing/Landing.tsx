import React, { useState } from "react";

import config from "../../config/config";
import "./Landing.css";
import "./LandingContent.css";

const landingContainerStyle = {
  backgroundImage: `url(${config.imgURL.landingImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const LandingContent = () => {
  return (
    <div className="landing-content-container">
      <div className="landing-text-container">
        <h1>barberok</h1>
        <p>Tocá en sacar turno, seleccioná un día y vení a cortarte 🧨</p>
      </div>
      <div className="landing-btns-container">
        <div className="landing-btn-take-turn">
          <button>Sacar turno</button>
        </div>
        <div className="landing-btns-contact">
          <a
            href={config.externURL.clientInstagram}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="barber instagram" src={config.imgURL.instagram} />
          </a>
          <a
            href={config.externURL.clientWhatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="barber whatsapp" src={config.imgURL.whatsapp} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {

  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="landing-container-main" style={landingContainerStyle}>
      <div className="landing-container">
        <LandingContent />.
      </div>
    </div>
  );
};

export default Landing;
