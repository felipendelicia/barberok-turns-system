import React, { useState } from "react";
import { motion } from "framer-motion";
import config from "../../config/config";
import "./Landing.css";
import "./LandingContent.css";
import TakeTurnsModal from "../TakeTurns/TakeTurns";

const landingContainerStyle = {
  backgroundImage: `url(${config.imgURL.landingImage})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const LandingContent = (props: {
  openModal: () => void;
  closeModal: () => void;
  statusModal: boolean;
}) => {
  return (
    <div className="landing-content-container">
      <div className="landing-text-container">
        <h1>barberok</h1>
        <p>Tocá en sacar turno, seleccioná un día y vení a cortarte 🧨</p>
      </div>
      <div className="landing-btns-container">
        <div className="landing-btn-take-turn">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={props.statusModal ? props.closeModal : props.openModal}
          >
            Sacar turno
          </motion.button>
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
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <div className="landing-container-main" style={landingContainerStyle}>
      <div className="landing-container">
        <LandingContent
          openModal={openModal}
          closeModal={closeModal}
          statusModal={isOpenModal}
        />
      </div>
      {isOpenModal && <TakeTurnsModal closeModal={closeModal}/>}
    </div>
  );
};

export default Landing;
